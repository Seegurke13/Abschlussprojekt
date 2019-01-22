<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use MongoTimestamp;

/**
 * @MongoDB\Document(repositoryClass="App\Repository\UpdateRepository")
 */
class Update
{
    /**
     * @MongoDB\Id(strategy="increment")
     */
    private $id;
    /**
     * @MongoDB\Field(type="timestamp")
     */
    private $date;
    /**
     * @var string
     */
    private $type;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    private $themeName;
    /**
     * @var int
     * @MongoDB\Field(type="integer")
     */
    private $affiliateId;
    /**
     * @var bool
     * @MongoDB\Field(type="boolean")
     */
    private $isChecked;
    /**
     * @var array
     * @MongoDB\Field(type="hash", strategy="set")
     */
    private $fields;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    private $error;
    /**
     * @MongoDB\Field(type="timestamp")
     */
    private $lastActivate;

    public function __construct()
    {
        $this->fields = [];
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id): void
    {
        $this->id = $id;
    }

    public function getDate(): ?MongoTimestamp
    {
        return $this->date;
    }

    public function setDate($date): void
    {
        $this->date = $date;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type): void
    {
        $this->type = $type;
    }

    public function isChecked(): bool
    {
        return (bool) $this->isChecked;
    }

    public function setIsChecked(bool $isChecked): void
    {
        $this->isChecked = $isChecked;
    }

    public function getFields(): array
    {
        return $this->fields;
    }

    public function setFields(array $fields): void
    {
        $this->fields = $fields;
    }

    public function addField(string $name, string $html): void
    {
        $this->fields[$name] = $html;
    }

    public function getThemeName(): string
    {
        return $this->themeName;
    }

    public function setThemeName(string $themeName): void
    {
        $this->themeName = $themeName;
    }

    public function getAffiliateId(): int
    {
        return $this->affiliateId;
    }

    public function setAffiliateId(?int $affiliateId): void
    {
        $this->affiliateId = $affiliateId;
    }

    public function setError(string $error)
    {
        $this->error = $error;
    }

    public function getError(): ?string
    {
        return $this->error;
    }

    public function activate(): void
    {
        $this->lastActivate = new MongoTimestamp();
    }
}