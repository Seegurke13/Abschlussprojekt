<?php

namespace App\Form;

use App\Document\Field;
use App\Document\Preset;
use App\Repository\PresetRepository;
use Doctrine\Bundle\MongoDBBundle\Form\Type\DocumentType;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FieldType extends AbstractType
{
    /**
     * @var PresetRepository
     */
    private $presetRepository;

    public function __construct(PresetRepository $presetRepository)
    {
        $this->presetRepository = $presetRepository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id', TextType::class)
            ->add('source', TextType::class)
//            ->add('presets', CollectionType::class, [
//                'entry_type' => PresetSelectionType::class,
//            ])
            ->add('presets', DocumentType::class, [
                'class' => Preset::class,
                'choices' => $this->presetRepository->findAll(),
                'choice_label' => function (Preset $preset, $key, $value) {
                    return $preset->getName();
                },
                'multiple' => true,
                'required' => false,
                'expanded' => true,
            ])

//            ->get('presets')->addModelTransformer(new CallbackTransformer(function (?Collection $presetsAsArray) {
//                    $return = $presetsAsArray !== null ?
//                        array_reduce(
//                            $presetsAsArray->toArray(),
//                            function ($carry, $item) {
//                            },
//                            []) :
//                        [];
//                    return $return;
//                }, function ($presetAsInt) {
//                    return $presetAsInt !== null ? array_reduce($presetAsInt, function ($carry, $item) {
//                        return $carry[] = ['id' => $item];
//                    }, []): [];
//                })
//            );
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'csrf_protection' => false,
            'data_class' => Field::class,
        ]);
    }
}
