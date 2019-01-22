<?php


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
            ->sort('date', 1)
            ->limit(1)
            ->field('themeName')->equals($theme->getName());
        $query = $qb->getQuery();

        /** @var Update|null $update */
        $update = $query->getSingleResult();

        return $update;
    }
}