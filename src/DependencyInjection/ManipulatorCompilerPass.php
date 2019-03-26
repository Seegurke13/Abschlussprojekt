<?php
declare(strict_types=1);


namespace App\DependencyInjection;


use App\Service\ManipulatorContainer;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class ManipulatorCompilerPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container)
    {
        $manipulators = $container->findTaggedServiceIds(ManipulatorContainer::MANIPULATOR_TAG);

        $manipulatorServices = [];
        foreach ($manipulators as $manipulatorId=>$manipulatorDefinition) {
            $manipulatorServices[$manipulatorId] = new Reference($manipulatorId);
        }
        $manipulatorContainer = $container->findDefinition(ManipulatorContainer::class);
        $argumentDefinition = $manipulatorContainer->setArgument(0, $manipulatorServices);
        $container->addDefinitions([$argumentDefinition]);
        $container->setDefinition(ManipulatorContainer::class, $manipulatorContainer);
    }
}