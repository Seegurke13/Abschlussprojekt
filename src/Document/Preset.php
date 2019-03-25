<?php
declare(strict_types=1);

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @MongoDB\Document(repositoryClass="App\Repository\PresetRepository")
 */
class Preset
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @Groups({"rest"})
     * @Assert\Type("integer")
     */
    private $id;

    /**
     * @MongoDB\Field(type="string")
     * @Assert\NotBlank
     */
    private $name;

    /**
     * @mongoDB\Field(type="string")
     */
    private $rules;

    /**
     * @MongoDB\Field(type="string")
     * @Assert\NotBlank
     */
    private $type;

    public function getId(): ?int
    {
        return (int) $this->id;
    }

    public function setId(?int $id)
    {
        $this->id = $id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName($name): void
    {
        $this->name = $name;
    }

    public function getRules(): ?string
    {
        return $this->rules;
    }

    public function setRules(?string $rules): void
    {
        $this->rules = $rules;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type)
    {
        $this->type = $type;
    }
}