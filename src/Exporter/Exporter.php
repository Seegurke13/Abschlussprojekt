<?php


namespace App\Exporter;


use App\Event\GetUpdateEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

abstract class Exporter implements EventSubscriberInterface
{
    public const EXPORT_START = 'export.start';

    public function export(GetUpdateEvent $event)
    {
        die('update');
    }

    public static function getSubscribedEvents()
    {
        return [
            self::EXPORT_START => 'export',
        ];
    }
}