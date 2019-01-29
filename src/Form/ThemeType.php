<?php

namespace App\Form;

use App\Document\Field;
use App\Document\Theme;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ThemeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id')
            ->add('name', TextType::class)
            ->add('fields', CollectionType::class, [
                'entry_type' => FieldType::class,
                'allow_add' => true,
                'allow_delete' => true,
            ])
            ->add('affiliateId', NumberType::class, [
                'required' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Theme::class,
            'csrf_protection' => false,
        ]);
    }
}
