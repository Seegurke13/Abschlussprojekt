<?php

namespace App\Document;

use Doctrine\MongoDB\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(repositoryClass="App\Repository\ThemeRepository")
 */
class Theme
{
    /**
     * @MongoDB\Id(strategy="increment")
     */
    private $id;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    private $name;
    /**
     * @var int
     * @MongoDB\Field(type="integer")
     */
    private $affiliateId;
    /**
     * @var Collection
     * @MongoDB\EmbedMany(targetDocument="App\Document\Field", strategy="set")
     */
    private $fields;

    public function __construct()
    {
        $this->fields = [];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function addField(Field $field): void
    {
        $this->fields[$field->getName()] = $field;
    }

    public function setFields($collection)
    {
        $this->fields = $collection;
    }

    public function getFields()
    {
        return $this->fields;
    }

    /**
     * @throws \Exception
     */
    public function getField(string $fieldName): Field
    {
        if (array_key_exists($fieldName, $this->fields) === $this->fields) {
            throw new \Exception('Field does not exists');
        }

        return $this->fields[$fieldName];
    }

    /**
     * @return int
     */
    public function getAffiliateId(): ?int
    {
        return $this->affiliateId;
    }

    /**
     * @param int $affiliateId
     */
    public function setAffiliateId(?int $affiliateId): void
    {
        $this->affiliateId = $affiliateId;
    }
}