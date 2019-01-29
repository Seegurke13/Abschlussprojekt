<?php

namespace App\Controller;

use App\Document\Update;
use App\ErrorResponse;
use App\Exception\ExportException;
use App\Repository\UpdateRepository;
use App\Service\UpdateService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Monolog\Logger;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UpdateController extends AbstractController
{
    const DEFAULT_ENV = 'dev';
    const RESTORE_PREVIOUS = true;
    /**
     * @var UpdateService
     */
    private $updateService;
    /**
     * @var DocumentManager
     */
    private $documentManager;
    /**
     * @var Logger
     */
    private $logger;
    /**
     * @var UpdateRepository
     */
    private $updateRepository;

    public function __construct(
        UpdateService $updateService,
        DocumentManager $documentManager,
        LoggerInterface $logger,
        UpdateRepository $updateRepository
    )
    {
        $this->updateService = $updateService;
        $this->documentManager = $documentManager;
        $this->logger = $logger;
        $this->updateRepository = $updateRepository;
    }

    /**
     * @Route("/update/{update}/export", name="update_export")
     */
    public function export(Update $update, Request $request)
    {
        $env = $request->get('env', self::DEFAULT_ENV);
        $isDef = $env === $this->getParameter('website_endpoints')['dev_environment'];
        $restoreOnFail = $request->get('restore', self::RESTORE_PREVIOUS && !$isDef);

        try {
            $this->exportUpdate($update, $env);
        } catch (ExportException $exception) {
            $message = 'previous update is restored';
            if ($restoreOnFail === true) {
                $previousUpdate = $this->updateRepository->findPreviousActive($update);
                $message = $this->restorePrevious($update, $env, $message);

                $previousUpdate->activate();
                $this->documentManager->flush();
            }

            return new ErrorResponse($exception, 500, $message);
        }
        $update->activate();
        $this->documentManager->flush();

        return $this->json(['status' => 'success']);
    }

    private function restorePrevious(Update $update, $env, &$message = '')
    {
        if ($update instanceof Update) {
            try {
                $this->updateService->exportUpdate($update);
            } catch (ExportException $e) {
                $message = 'cannot export previous update';
                $this->logger->error($message, [
                    'themeName' => $update->getThemeName(),
                    'environment' => $env,
                    'updateId' => $update->getId(),
                ]);
            }
        }
    }

    /**
     * @throws ExportException
     */
    private function exportUpdate(Update $update, $env)
    {
        try {
            $this->updateService->exportUpdate($update, $env);

            $this->logger->info('Export to Website finish', [
                'themeName' => $update->getThemeName(),
                'environment' => $env,
                'fields' => $update->getFields(),
            ]);
        } catch (ExportException $exception) {
            $this->logger->error('Export to website failed', [
                'themeName' => $update->getThemeName(),
                'environment' => $env,
                'fields' => $update->getFields(),
                'error' => $exception,
            ]);

            throw $exception;
        }
    }
}
