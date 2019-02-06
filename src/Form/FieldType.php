<?php

namespace App\Form;

use App\Document\Field;
use App\Document\Preset;
use App\Repository\PresetRepository;
use Doctrine\Bundle\MongoDBBundle\Form\Type\DocumentType;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
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
            ->add('presets', DocumentType::class, [
                'class' => Preset::class,
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false,
                'expanded' => true,
            ])
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
