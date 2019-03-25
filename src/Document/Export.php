<?php
declare(strict_types=1);


namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @MongoDB\EmbeddedDocument
 */
class Export
{
    /**
     * @var \DateTime
     * @MongoDB\Field(type="date")
     * @Groups({"rest"})
     */
    private $datetime;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     * @Groups({"rest"})
     */
    private $env;

    public function __construct(\DateTime $datetime, string $env)
    {
        $this->datetime = $datetime;
        $this->env = $env;
    }

    /**
     * @return \DateTime
     */
    public function getDatetime(): \DateTime
    {
        return $this->datetime;
    }

    /**
     * @param \DateTime $datetime
     */
    public function setDatetime(\DateTime $datetime): void
    {
        $this->datetime = $datetime;
    }

    /**
     * @return string
     */
    public function getEnv(): string
    {
        return $this->env;
    }

    /**
     * @param string $env
     */
    public function setEnv(string $env): void
    {
        $this->env = $env;
    }
}