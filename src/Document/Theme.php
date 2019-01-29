<?php

namespace App\Document;

use Doctrine\MongoDB\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @MongoDB\Document(repositoryClass="App\Repository\ThemeRepository")
 */
class Theme
{
    /**
     * @MongoDB\Id(strategy="increment")
     * @Groups({"rest"})
     */
    private $id;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     * @Assert\NotBlank
     * @Groups({"rest"})
     */
    private $name;
    /**
     * @var int
     * @MongoDB\Field(type="integer")
     * @Assert\NotBlank
     * @Groups({"rest"})
     */
    private $affiliateId;
    /**
     * @var Collection
     * @MongoDB\EmbedMany(targetDocument="App\Document\Field")
     * @Groups({"rest"})
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

    public function setId(?int $id)
    {
        $this->id = $id;
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
        $this->fields[] = $field;
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