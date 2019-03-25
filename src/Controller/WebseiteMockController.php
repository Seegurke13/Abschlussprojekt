<?php
declare(strict_types=1);


namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class WebseiteMockController extends AbstractController
{
    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    /**
     * @Route("/webseite")
     */
    public function mock(Request $request)
    {
        $this->logger->debug('Webseite Endpoint Recive Data', json_decode($request->getContent(), true));

        return $this->json(['success' => true]);
    }
}