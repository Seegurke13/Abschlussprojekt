<?php


namespace App\DataFixtures\MongoDB\Themes;

use App\DataFixtures\MongoDB\Presets\FooterFixture;
use App\DataFixtures\MongoDB\Presets\HeaderFixture;
use App\DataFixtures\MongoDB\Presets\HeadFixture;
use App\DataFixtures\MongoDB\Presets\TitleFixture;
use App\Document\Field;
use App\Document\Theme;
use App\Document\Update;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Collections\ArrayCollection;

class TravelscoutFixture extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $theme = new Theme();
        $theme->setId(2000);
        $theme->setName('TravelScout24');
        $theme->setAffiliateId(2000);

        $field = new Field();
        $field->setName('Footer');
        $field->setPresets(new ArrayCollection([$this->getReference(FooterFixture::REF)]));
        $field->setSource('https://www.google.de');
        $theme->addField($field);

        $field = new Field();
        $field->setName('Header');
        $field->setPresets(new ArrayCollection([$this->getReference(HeaderFixture::REF)]));
        $field->setSource('https://www.google.de');
        $theme->addField($field);

        $field = new Field();
        $field->setName('Head');
        $field->setPresets(new ArrayCollection(
            [
                $this->getReference(HeadFixture::REF),
                $this->getReference(TitleFixture::REF)
            ]
        ));
        $field->setSource('https://www.google.de');
        $theme->addField($field);

        $update = new Update();
        $update->setType('manual');
        $theme->addUpdate($update);

        $manager->persist($theme);
        $manager->flush();
    }
}