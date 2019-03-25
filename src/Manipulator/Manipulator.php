<?php
declare(strict_types=1);


namespace App\Manipulator;


interface Manipulator
{
    public function supports(string $type): bool;
    public function manipulate(string $content, string $rules): string;
    public function getType(): string;
}