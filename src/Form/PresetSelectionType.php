<?php
declare(strict_types=1);

namespace App\Form;

use App\Document\Preset;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PresetSelectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
//            ->add('presets', DocumentType::class, [
//                'multiple' => true,
//                'class' => Preset::class,
//                'choice_label' => 'name',
//                'expanded' => true,
//            ]);
        ->add('id');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Preset::class,
//            'inherit_data' => true,
//            'allow_extra_fields' => true,
        ]);
    }
}
