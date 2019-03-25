<?php
declare(strict_types=1);


namespace App\Service;


use App\Document\Theme;
use App\Document\Update;
use App\Repository\UpdateRepository;

class LastUpdateService
{
    /**
     * @var UpdateRepository
     */
    private $updateRepository;

    public function __construct(UpdateRepository $updateRepository)
    {
        $this->updateRepository = $updateRepository;
    }

    public function forTheme(Theme $theme): ?Update
    {
        return $this->updateRepository->getLatestUpdateForTheme($theme);
    }
}