<?php


namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\EmbeddedDocument
 */
class Field
{
    /**
     * @MongoDB\Id(strategy="increment")
     */
    private $id;
    /**
     * @var string
     */
    private $name;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    private $source;
    /**
     * @var array
     * @MongoDB\ReferenceMany(targetDocument="App\Document\Preset")
     */
    private $presets;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return array
     */
    public function getPresets()
    {
        return $this->presets;
    }

    /**
     * @param array $presets
     */
    public function setPresets(?array $presets): void
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