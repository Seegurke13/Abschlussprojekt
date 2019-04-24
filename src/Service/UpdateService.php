<?php
declare(strict_types=1);


namespace App\Service;


use App\Document\Field;
use App\Document\Theme;
use App\Document\Update;
use App\Event\GetImportEvent;
use App\Event\GetUpdateEvent;
use App\Exception\ExportException;
use App\Exception\UpdateException;
use App\Exporter\Exporter;
use App\Importer\Importer;
use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class UpdateService
{
    public const UPDATE_FINISH = 'updater.finish';
    public const UPDATE_START = 'update.start';

    private const DEST_CHARSET = 'UTF-8//IGNORE';

    /**
     * @var HtmlManipulator
     */
    private $manipulator;
    /**
     * @var EventDispatcherInterface
     */
    private $dispatcher;
    /**
     * @var DocumentManager
     */
    private $documentManager;

    public function __construct(
        HtmlManipulator $manipulator,
        EventDispatcherInterface $dispatcher,
        DocumentManager $documentManager
    )
    {
        $this->manipulator = $manipulator;
        $this->dispatcher = $dispatcher;
        $this->documentManager = $documentManager;
    }

    /**
     * @throws UpdateException
     */
    public function importFields(Collection $fields): array
    {
        $updateFields = [];

        /** @var Field $field */
        foreach ($fields as $fieldName => $field) {
            if ($field->getSource() === null) {
                throw new UpdateException('no source set');
            }
            $event = new GetImportEvent();
            $event->setSource($field->getSource());
            $this->dispatcher->dispatch(Importer::IMPORT_START, $event);
            $updateFields[$fieldName] = $event->getHtml();
        }

        return $updateFields;
    }

    /**
     * @throws ExportException
     */
    public function exportUpdate(Update $update, $env)
    {
        try {
            $event = new GetUpdateEvent();
            $event->setUpdate($update);
            $event->setEnv($env);

            $this->dispatcher->dispatch(Exporter::EXPORT_START, $event);
        } catch (\Exception $exception) {
            throw new ExportException($exception->getMessage());
        }
    }

    /**
     * @throws UpdateException
     */
    public function manipulateFields(Collection $themeFields, array $fields): array
    {
        $updatedValues = [];
        /** @var Field $field */
        foreach ($themeFields as $fieldName => $field) {
            if ($fields[$fieldName] === null || empty($fieldName[$fieldName])) {
                throw new UpdateException("no html in field {$fieldName}");
            }
            $html = $this->manipulator->transformHtml(
                $fields[$fieldName],
                $field->getPresets()
            );

            $originalCharset = mb_detect_encoding($html, mb_detect_order(), true);
            $html = iconv($originalCharset, self::DEST_CHARSET, $html);
            $updatedValues[$fieldName] = $html;
        }

        return $updatedValues;
    }

    public function createUpdate(Theme $theme): Update
    {
        $update = new Update();
        $update->setDate(new DateTime());
        $update->setAffiliateId($theme->getAffiliateId());
        $update->setThemeName($theme->getName());
        $update->setStatus(0);

        return $update;
    }
}