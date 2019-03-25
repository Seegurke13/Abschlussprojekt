<?php
declare(strict_types=1);


namespace App\Manipulator;


abstract class AbstractManipulator implements Manipulator
{
    protected const TYPE = false;

    public function supports(string $type): bool
    {
        return ($type === self::TYPE);
    }

    public function manipulate(string $content, string $rules): string
    {
        return $content;
    }

    public function getType(): string
    {
        return $this::TYPE;
    }
}