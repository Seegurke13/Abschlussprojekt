<?php


namespace App\Service;


use App\Repository\UpdateRepository;
use App\Document\Theme;

class LastUpdateService
{
    private $updateRepository;

    public function __construct(UpdateRepository $updateRepository)
    {
        $this->updateRepository = $updateRepository;
    }

    public function forTheme(Theme $theme)
    {
        return $this->updateRepository->getLatestUpdateForTheme($theme);
    }
}