<?php
declare(strict_types=1);


namespace App\Event;


use Symfony\Component\EventDispatcher\Event;

class GetImportEvent extends Event
{
    private $source;
    private $html;

    public function getSource(): ?string
    {
        return $this->source;
    }

    public function setSource(?string $source): void
    {
        $this->source = $source;
    }

    public function getHtml(): ?string
    {
        return $this->html;
    }

    public function setHtml(?string $html): void
    {
        $this->html = $html;
    }
}