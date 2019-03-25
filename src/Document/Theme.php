<?php
declare(strict_types=1);

namespace App\Document;

use Doctrine\Common\Collections\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\Common\Collections\ArrayCollection;

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

    /**
     * @var Collection
     * @MongoDB\EmbedMany(targetDocument="App\Document\Update")
     * @Groups({"rest"})
     */
    private $updates;

    public function __construct()
    {
        $this->fields = new ArrayCollection();
        $this->updates = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): void
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

    public function setFields(?Collection $collection): void
    {
        $this->fields = $collection;
    }

    public function getFields(): Collection
    {
        return $this->fields;
    }

    public function getAffiliateId(): ?int
    {
        return $this->affiliateId;
    }

    public function setAffiliateId(?int $affiliateId): void
    {
        $this->affiliateId = $affiliateId;
    }

    public function addUpdate(Update $update): void
    {
        $this->updates[] = $update;
    }

    public function getUpdates(): Collection
    {
        return $this->updates;
    }

    public function setUpdates(Collection $updates): void
    {
        $this->updates = $updates;
    }
}