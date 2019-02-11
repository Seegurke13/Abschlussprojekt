<?php


namespace App\Document;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @MongoDB\EmbeddedDocument
 */
class Field
{
    /**
     * @MongoDB\Id(strategy="NONE", type="string")
     * @Groups({"rest"})
     */
    private $id;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     * @Groups({"rest"})
     */
    private $source;
    /**
     * @var Collection
     * @MongoDB\ReferenceMany(targetDocument="App\Document\Preset", mappedBy="fields", storeAs="id")
     */
    private $presets;

    public function __construct()
    {
        $this->presets = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId(): ?string
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId(?string $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName(): ?string
    {
        return $this->getId();
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->setId($name);
    }

    /**
     * @return Collection
     */
    public function getPresets(): ?Collection
    {
        return $this->presets;
    }

    /**
     * @Groups({"rest"})
     * @SerializedName("presets")
     */
    public function getPresetIds(): ?Collection
    {
        return $this->presets->map(function (Preset $item) {
            return $item->getId();
        });
    }

    /**
     * @param array $presets
     */
    public function setPresets(?Collection $presets): void
    {
        $this->presets = $presets;
    }

    /**
     * @return string
     */
    public function getSource(): ?string
    {
        return $this->source;
    }

    /**
     * @param string $source
     */
    public function setSource(?string $source): void
    {
        $this->source = $source;
    }
}