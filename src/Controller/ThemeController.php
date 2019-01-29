<?php

namespace App\Controller;

use App\Document\Theme;
use App\ErrorResponse;
use App\Exception\UpdateException;
use App\Form\ThemeType;
use App\Repository\ThemeRepository;
use App\Service\JsonSerializer;
use App\Service\UpdateService;
use App\JsonResponse;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

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
    /**
     * @var SerializerInterface
     */
    private $serializer;

    public function __construct(
        DocumentManager $documentManager,
        ThemeRepository $themeRepository,
        UpdateService $updateService,
        JsonSerializer $serializer
    )
    {
        $this->documentManager = $documentManager;
        $this->themeRepository = $themeRepository;
        $this->updateService = $updateService;
        $this->serializer = $serializer;
    }

    /**
     * @Route("/", name="theme")
     */
    public function index()
    {
        $viewVars = [];
        $themes = $this->themeRepository->findAll();
        /** @var Theme $theme */
        foreach ($themes as $theme) {
            $viewVars[] = [
                'id' => $theme->getId(),
                'name' => $theme->getName(),
                'affiliateId' => $theme->getId(),
                'lastUpdate' => '',
                'status' => ''
            ];
        }

        return $this->json($viewVars);
    }

    /**
     * @Route("/new", name="theme_new")
     */
    public function create(Request $request)
    {
        $theme = new Theme();
        $form = $this->createForm(ThemeType::class, $theme);
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
        $form->submit(json_decode($request->getContent(), true), true);

        if ($form->isValid() === true) {
            $this->documentManager->flush();

            return $this->json(['status' => 'success']);
        }

        return $this->json(['status' => 'error', 'error' => $form->getErrors(true, true)]);
    }

    /**
     * @Route("/{id}", name="theme_show")
     */
    public function show(Theme $theme)
    {
        return new JsonResponse($this->serializer->serialize($theme));
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
