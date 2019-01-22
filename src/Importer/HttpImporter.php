<?php


namespace App\Importer;


use App\Exception\SourceNotAvailableException;
use App\Service\HttpClient;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Validation;

class HttpImporter extends Importer
{
    /**
     * @var Client
     */
    private $client;

    public function __construct(HttpClient $client)
    {
        $this->client = $client;
    }

    protected function supports(string $source): bool
    {
        $validator = Validation::createValidator();

        return $validator->validate($source, new Url())->count() === 0;
    }

    /**
     * @throws SourceNotAvailableException
     */
    public function import(string $source): ?string
    {
        try {
            $response = $this->client->request('GET', $source);
            if ($response->getStatusCode() !== 200) {
                throw new SourceNotAvailableException($source);
            }

            return $response->getBody();
        } catch (GuzzleException $e) {
            throw new SourceNotAvailableException($source);
        }
    }
}