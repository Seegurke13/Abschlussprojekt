<?php
declare(strict_types=1);


namespace App\Controller;


use App\Document\Theme;
use App\Document\Update;
use App\Repository\ThemeRepository;
use App\Repository\UpdateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;

class IndexController extends AbstractController
{
    /**
     * @var ThemeRepository
     */
    private $themeRepository;
    /**
     * @var UpdateRepository
     */
    private $updateRepository;

    public function __construct(
        ThemeRepository $themeRepository,
        UpdateRepository $updateRepository)
    {
        $this->themeRepository = $themeRepository;
        $this->updateRepository = $updateRepository;
    }

    /**
     * @Route("/index", name="index")
     */
    public function index()
    {
        $viewModel = [];

        $themes = $this->themeRepository->findAll();

        /** @var Theme $theme */
        foreach ($themes as $theme) {
            $themeView = [
                'id' => $theme->getId(),
                'name' => $theme->getName(),
                'affiliateId' => $theme->getAffiliateId(),
            ];

            $lastUpdate = $this->updateRepository->getLatestUpdateForTheme($theme);
            /** @var Update $lastUpdate */
            if ($lastUpdate instanceof Update) {
                $themeView['last_update'] = [
                    'id' => $lastUpdate->getId(),
                    'date' => $lastUpdate->getDate(),
                    'isChecked' => $lastUpdate->isChecked(),
                ];
            }
            $viewModel[] = $themeView;
        }

        return $this->json($viewModel);
    }

    /**
     * @Route("/", name="api")
     */
    public function routes(RouterInterface $router)
    {
        $routes = $router->getRouteCollection();

        $data = [];
        foreach ($routes as $key => $value) {
            $data[$key]['route'] = $value->getPath();
            $data[$key]['name'] = $key;
        }

        return $this->json($data);
    }
}