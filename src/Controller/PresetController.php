<?php

namespace App\Controller;

use App\Document\Preset;
use App\Form\PresetType;
use App\Repository\PresetRepository;
use App\Service\ManipulatorContainer;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/preset")
 */
class PresetController extends AbstractController
{
    /**
     * @var PresetRepository
     */
    private $presetRepository;
    /**
     * @var DocumentManager
     */
    private $documentManager;
    /**
     * @var ManipulatorContainer
     */
    private $manipulatorContainer;

    public function __construct(
        DocumentManager $documentManager,
        PresetRepository $presetRepository,
        ManipulatorContainer $manipulatorContainer
    ) {
        $this->documentManager = $documentManager;
        $this->presetRepository = $presetRepository;
        $this->manipulatorContainer = $manipulatorContainer;
    }

    /**
     * @Route("/new", name="preset_create")
     */
    public function create(Request $request)
    {
        $preset = new Preset();
        $form = $this->createForm(PresetType::class, $preset);
        $form->submit(json_decode($request->getContent(), true), false);

        if ($form->isValid() === true) {
            $this->documentManager->persist($preset);
            $this->documentManager->flush();

            return new JsonResponse(['status' => 'success']);
        }

        return new JsonResponse(['status' => 'error', $form->getErrors()]);
    }

    /**
     * @Route("/types")
     */
    public function getSupportedTypes()
    {
        return $this->json($this->manipulatorContainer->getAllSupportingTypes());
    }

    /**
     * @Route("/edit/{id}", name="preset_edit")
     */
    public function edit(Preset $preset, Request $request)
    {
        $form = $this->createForm(PresetType::class, $preset);
        $form->submit(json_decode($request->getContent(), true), false);

        if ($form->isValid() === true) {
            $this->documentManager->flush();

            return new JsonResponse(['status' => 'success']);
        }

        return new JsonResponse(['status' => 'error', $form->getErrors()]);
    }

    /**
     * @Route("/", name="preset")
     */
    public function index()
    {
        $presets = $this->presetRepository->findAll();

        return $this->json($presets);
    }

    /**
     * @Route("/{id}", name="preset_show")
     */
    public function show(Preset $preset)
    {
        return $this->json($preset);
    }
}
