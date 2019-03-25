<?php
declare(strict_types=1);


namespace App\Service;


use App\Exception\UpdateException;
use App\Manipulator\Manipulator;
use Doctrine\Common\Collections\ArrayCollection;

class ManipulatorContainer
{
    public const MANIPULATOR_TAG = 'updater.manipulator';
    /**
     * @var ArrayCollection
     */
    private $manipulators;

    public function __construct(array $manipulators)
    {
        $this->manipulators = $manipulators;
    }

    /**
     * @throws UpdateException
     */
    public function getSupportingManipulator(string $type): Manipulator
    {
        foreach ($this->manipulators as $manipulator) {
            if ($manipulator->supports($type) === true) {
                return $manipulator;
            }
        }

        throw new UpdateException("Type {$type} is not supported by Manipulators");
    }

    public function getAllSupportingTypes(): array
    {
        $types = [];
        /** @var Manipulator $manipulator */
        foreach ($this->manipulators as $manipulator) {
            $types[] = $manipulator->getType();
        }

        return $types;
    }
}