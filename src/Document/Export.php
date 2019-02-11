<?php


namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\EmbeddedDocument
 */
class Export
{
    /**
     * @var \DateTime
     * @MongoDB\Field(type="date")
     */
    private $datetime;
    /**
     * @var string
     * @MongoDB\Field(type="string")
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