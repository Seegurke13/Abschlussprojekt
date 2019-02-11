<?php

namespace App\Document;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use JMS\Serializer\Annotation as Serializer;
use DateTime;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @MongoDB\Document(repositoryClass="App\Repository\UpdateRepository")
 */
class Update
{
    /**
     * @MongoDB\Id(strategy="increment")
     * @Groups({"rest"})
     */
    private $id;
    /**
     * @MongoDB\Field(type="date")
     * @Groups({"rest"})
     */
    private $date;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     * @Groups({"rest"})
     */
    private $type;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     * @Groups({"rest"})
     */
    private $themeName;
    /**
     * @var int
     * @MongoDB\Field(type="integer")
     * @Groups({"rest"})
     */
    private $affiliateId;
    /**
     * @var array
     * @MongoDB\Field(type="hash", strategy="set")
     * @Groups({"rest"})
     */
    private $fields;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    private $error;

    /**
     * @MongoDB\EmbedMany(targetDocument="App\Document\Export")
     * @Groups({"rest"})
     */
    private $exports;
    /**
     * @var int
     * @MongoDB\Field(type="integer")
     * @Groups({"rest"})
     */
    private $status;

    public function __construct()
    {
        $this->fields = [];
        $this->exports = new ArrayCollection();
        $this->date = new DateTime();
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id): void
    {
        $this->id = $id;
    }


    /**
     * @Groups({"rest"})
     * @Serializer\SerializedName("date")
     */
    public function getDate(): ?DateTime
    {
        return $this->date;
    }

    public function getDateAsNumber()
    {
        return 1;
    }

    public function setDate(DateTime $date): void
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

    public function getError(): ?string
    {
        return $this->error;
    }

    public function setError(string $error)
    {
        $this->error = $error;
    }

    public function getExports(): ?Collection
    {
        return $this->exports;
    }

    public function setExports(Collection $exports): void
    {
        $this->exports = $exports;
    }

    public function addExport(Export $export): void
    {
        $this->exports->add($export);
    }

    public function setStatus(int $int)
    {
        $this->status = $int;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }
}