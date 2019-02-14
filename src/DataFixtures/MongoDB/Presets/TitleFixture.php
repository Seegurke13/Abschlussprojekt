<?php


namespace App\DataFixtures\MongoDB\Presets;


use App\Document\Preset;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;

class TitleFixture extends AbstractFixture
{
    public const REF = 'title';

    public function load(ObjectManager $manager)
    {
        $preset = new Preset();
        $preset->setId(4);
        $preset->setName('Title remove');
        $preset->setType('jquery');
        $preset->setRules('$("title").remove()');

        $manager->persist($preset);
        $manager->flush();

        $this->setReference(self::REF, $preset);
    }
}