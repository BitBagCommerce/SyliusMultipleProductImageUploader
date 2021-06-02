<?php

declare(strict_types=1);

namespace BitBag\SyliusMultipleProductImageUploader\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

final class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('bitbag_sylius_multiple_product_image_uploader');
        $rootNode = $treeBuilder->getRootNode();

        return $treeBuilder;
    }
}
