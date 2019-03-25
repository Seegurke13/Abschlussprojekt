<?php
declare(strict_types=1);


namespace App\Importer;


use App\Event\GetImportEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

abstract class Importer implements EventSubscriberInterface
{
    public const IMPORT_START = 'import.start';

    public static function getSubscribedEvents()
    {
        return [
            self::IMPORT_START => 'importField'
        ];
    }

    public function importField(GetImportEvent $event)
    {
        if ($this->supports($event->getSource()) === true && $event->getHtml() === null) {
            $event->setHtml($this->import($event->getSource()));
        }
    }

    protected function supports(string $source): bool
    {
        return false;
    }

    public function import(string $source): ?string
    {
        return null;
    }
}