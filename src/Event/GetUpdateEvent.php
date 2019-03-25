<?php
declare(strict_types=1);


namespace App\Event;


use App\Document\Update;
use Symfony\Component\EventDispatcher\Event;

class GetUpdateEvent extends Event
{
    /** @var Update */
    private $update;
    /** @var string */
    private $env;

    public function getUpdate(): ?Update
    {
        return $this->update;
    }

    public function setUpdate(Update $update): void
    {
        $this->update = $update;
    }

    public function getEnv(): ?string
    {
        return $this->env;
    }

    public function setEnv(string $env): void
    {
        $this->env = $env;
    }
}