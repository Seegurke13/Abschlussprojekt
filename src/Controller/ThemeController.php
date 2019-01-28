<?php

namespace App\Controller;

use App\Document\Theme;
use App\ErrorResponse;
use App\Exception\UpdateException;
use App\Form\ThemeType;
use App\Repository\ThemeRepository;
use App\Service\UpdateService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\MakerBundle\Validator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/theme")
 */
class ThemeController extends AbstractController
{
    /**
     * @var DocumentManager
     */
    private $documentManager;
    /**
     * @var ThemeRepository
     */
    private $themeRepository;
    /**
     * @var UpdateService
     */
    private $updateService;

    public function __construct(
        DocumentManager $documentManager,
        ThemeRepository $themeRepository,
        UpdateService $updateService
    )
    {
        $this->documentManager = $documentManager;
        $this->themeRepository = $themeRepository;
        $this->updateService = $updateService;
    }

    /**
     * @Route("/", name="theme")
     */
    public function index()
    {
        $themes = $this->themeRepository->findAll();

        return $this->json($themes);
    }

    /**
     * @Route("/new", name="theme_new")
     */
    public function create(Request $request)
    {
        $theme = new Theme();
        $form = $this->createForm(ThemeType::class, $theme);
        $request->getContent();
        $form->submit(json_decode($request->getContent(), true));

        if ($form->isValid() === true) {
            $this->documentManager->persist($theme);
            $this->documentManager->flush();

            return $this->json(['status' => 'success']);
        }

        return $this->json(['status' => 'error', 'error' => $form->getErrors()]);
    }

    /**
     * @Route("/{id}/edit", name="theme_edit", methods={"PUT","POST"})
     */
    public function edit(Theme $theme, Request $request)
    {
        $form = $this->createForm(ThemeType::class, $theme);
        $content = json_decode($request->getContent(), true);
        $form->submit($content, true);

        if ($form->isValid() === true) {
            $form->getData();
            $this->documentManager->flush();

            return $this->json(['status' => 'success']);
        }
        $errors = [];

        return $this->json(['status' => 'error', 'error' => $errors]);
    }

    /**
     * @Route("/{id}", name="theme_show")
     */
    public function show(Theme $theme)
    {
        return $this->json($theme);
    }

    /**
     * @Route("/{id}/update", name="theme_update")
     */
    public function update(Theme $theme)
    {
        $update = $this->updateService->createUpdate($theme);

        $themeFields = $theme->getFields();
        try {
            $fields = $this->updateService->importFields($themeFields);

            $update->setFields($this->updateService->manipulateFields($themeFields, $fields));
            $this->documentManager->persist($update);
        } catch (UpdateException $exception) {
            return new ErrorResponse($exception);
        }
        return $this->forward(UpdateController::class.'::export',[
            'update' => $update,
            'env' => 'rc',
        ]);
    }
}
