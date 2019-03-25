<?php
declare(strict_types=1);


namespace App\Service;


use Symfony\Component\Serializer\SerializerInterface;

class JsonSerializer
{
    /**
     * @var SerializerInterface
     */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    public function serialize($mixed): string
    {
        return $this->serializer->serialize($mixed, 'json', ['groups' => ['rest']]);
    }
}