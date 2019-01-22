<?php

namespace App\Controller;

use App\Document\Update;
use App\ErrorResponse;
use App\Exception\UpdateException;
use App\Service\UpdateService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Monolog\Logger;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UpdateController extends AbstractController
{
    const DEFAULT_ENV = 'rc';
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

    public function __construct(
        UpdateService $updateService,
        DocumentManager $documentManager,
        LoggerInterface $logger
    ){
        $this->updateService = $updateService;
        $this->documentManager = $documentManager;
        $this->logger = $logger;
    }

    /**
     * @Route("/update/{update}/export", name="update_export")
     */
    public function export(Update $update, Request $request)
    {
        $env = $request->get('env', self::DEFAULT_ENV);
        try {
            $this->updateService->exportUpdate($update, $env);

            $this->logger->info('Export to Website finish', [
                'themeName' => $update->getThemeName(),
                'environment' => $env,
                'fields' => $update->getFields(),
            ]);
        } catch (Exception $exception) {
            $this->logger->error('Export to website failed', [
                'themeName' => $update->getThemeName(),
                'environment' => $env,
                'fields' => $update->getFields(),
                'error' => $exception,
            ]);

            return new ErrorResponse($exception);
        }

        $update->activate();

        $this->documentManager->flush();

        return $this->json(['status' => 'success']);
    }
}
