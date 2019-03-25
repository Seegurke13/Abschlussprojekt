<?php
declare(strict_types=1);


namespace App\DataFixtures\MongoDB\Presets;


use App\Document\Preset;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;

class HeadFixture extends AbstractFixture
{
    public const REF = 'head';

    public function load(ObjectManager $manager)
    {
        $preset = new Preset();
        $preset->setId(2);
        $preset->setName('Head crop');
        $preset->setType('jquery');
        $preset->setRules('$("head").html()');

        $manager->persist($preset);
        $manager->flush();

        $this->setReference(self::REF, $preset);
    }
}