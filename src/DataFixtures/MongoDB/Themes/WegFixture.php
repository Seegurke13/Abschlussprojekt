<?php
declare(strict_types=1);


namespace App\DataFixtures\MongoDB\Themes;


use App\DataFixtures\MongoDB\Presets\FooterFixture;
use App\DataFixtures\MongoDB\Presets\HeaderFixture;
use App\DataFixtures\MongoDB\Presets\HeadFixture;
use App\Document\Field;
use App\Document\Theme;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Collections\ArrayCollection;

class WegFixture extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $theme = new Theme();
        $theme->setId(1000);
        $theme->setName('Weg.de');
        $theme->setAffiliateId(1000);

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
        $field->setPresets(new ArrayCollection([$this->getReference(HeadFixture::REF)]));
        $field->setSource('https://www.google.de');
        $theme->addField($field);

        $manager->persist($theme);
        $manager->flush();
    }
}