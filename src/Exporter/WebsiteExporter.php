<?php
declare(strict_types=1);


namespace App\Exporter;


use App\Event\GetUpdateEvent;
use App\Exception\UpdateException;
use App\Service\HttpClient;
use GuzzleHttp\Psr7\Request;
use Psr\Log\LoggerInterface;

class WebsiteExporter extends Exporter
{
    /**
     * @var LoggerInterface
     */
    private $logger;
    /**
     * @var HttpClient
     */
    private $httpClient;
    /**
     * @var array
     */
    private $endpoints;

    public function __construct(
        LoggerInterface $logger,
        HttpClient $httpClient,
        array $endpoints
    )
    {
        $this->logger = $logger;
        $this->httpClient = $httpClient;
        $this->endpoints = $endpoints;
    }

    /**
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws UpdateException
     */
    public function export(GetUpdateEvent $event)
    {
        $env = $event->getEnv();
        $update = $event->getUpdate();

        $request = new Request('PUT', $this->endpoints['environments'][$env], [], json_encode($update->getFields()));

        $response = $this->httpClient->send($request);
        if ($response->getStatusCode() !== 200) {
            throw new UpdateException('Status: ' . $response->getStatusCode() . '\nMessage: '. $response->getBody());
        }
    }
}