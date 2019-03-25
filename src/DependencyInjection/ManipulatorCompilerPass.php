<?php
declare(strict_types=1);


namespace App\DependencyInjection;


use App\Service\ManipulatorContainer;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Reference;

class ManipulatorCompilerPass implements CompilerPassInterface
{
    /**
     * You can modify the container here before it is dumped to PHP code.
     */
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