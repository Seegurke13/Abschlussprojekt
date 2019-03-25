<?php
declare(strict_types=1);


namespace App\Repository;


use App\Document\Theme;
use App\Document\Update;
use Doctrine\ODM\MongoDB\DocumentRepository;

class UpdateRepository extends DocumentRepository
{
    public function getLatestUpdateForTheme(Theme $theme): ?Update
    {
        $qb = $this->createQueryBuilder();
        $qb->find()
            ->sort('date', -1)
            ->limit(1)
            ->field('affiliateId')->equals($theme->getAffiliateId())
            ->field('themeName')->equals($theme->getName());
        $query = $qb->getQuery();

        /** @noinspection PhpIncompatibleReturnTypeInspection */
        return $query->getSingleResult();
    }

    public function findPreviousActive(Update $update)
    {
        $qb = $this->createQueryBuilder();
        $qb->find()
            ->sort('date', -1)
            ->limit(1)
            ->field('themeName')->equals($update->getThemeName())
            ->field('affiliateId')->equals($update->getAffiliateId());
        $query = $qb->getQuery();

        /** @noinspection PhpIncompatibleReturnTypeInspection */
        return $query->getSingleResult();
    }
}