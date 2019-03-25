<?php
declare(strict_types=1);


namespace App\Service;


use App\Document\Preset;
use Doctrine\Common\Collections\Collection;

class HtmlManipulator
{
    public const MODIFY_FINISH = 'manipulator.finish';
    public const MODIFY_START = 'manipulator.start';
    public const MODIFY_STEP = 'manipulator.step';

    /**
     * @var ManipulatorContainer
     */
    private $manipulatorContainer;

    public function __construct(ManipulatorContainer $manipulatorContainer)
    {
        $this->manipulatorContainer = $manipulatorContainer;
    }

    public function transformHtml(string $html, Collection $presets)
    {
        $html = array_reduce($presets->toArray(), [$this, 'transformStep'], $html);

        return $html;
    }

    /**
     * @throws \App\Exception\UpdateException
     */
    private function transformStep(string $html, Preset $preset): string
    {
        $manipulator = $this->manipulatorContainer->getSupportingManipulator($preset->getType());
        $html = $manipulator->manipulate($preset->getRules(), $html);

        return $html;
    }
}