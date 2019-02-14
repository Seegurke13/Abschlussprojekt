<?php


namespace App\DataFixtures\MongoDB\Presets;

use App\Document\Preset;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;

class FooterFixture extends AbstractFixture
{
    public const REF = 'footer';

    public function load(ObjectManager $manager)
    {
        $preset = new Preset();
        $preset->setId(3);
        $preset->setName('Footer crop');
        $preset->setType('css');
        $preset->setRules('footer:crop;');

        $manager->persist($preset);
        $manager->flush();

        $this->setReference(self::REF, $preset);
    }
}