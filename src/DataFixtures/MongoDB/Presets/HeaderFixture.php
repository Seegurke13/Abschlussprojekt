<?php
declare(strict_types=1);


namespace App\DataFixtures\MongoDB\Presets;

use App\Document\Preset;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;

class HeaderFixture extends AbstractFixture
{
    public const REF = 'header';

    public function load(ObjectManager $manager)
    {
        $preset = new Preset();
        $preset->setId(1);
        $preset->setName('Header crop');
        $preset->setType('jquery');
        $preset->setRules('$("header").html()');

        $manager->persist($preset);
        $manager->flush();

        $this->setReference(self::REF, $preset);
    }
}