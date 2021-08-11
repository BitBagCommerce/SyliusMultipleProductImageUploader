<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMultipleProductImageUploader\Form\Product;

use BitBag\SyliusMultipleProductImageUploader\Entity\Product\ProductInterface;
use Sylius\Bundle\CoreBundle\Form\Type\Product\ProductImageType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;

final class ProductImageTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->remove('type')
            ->add('type', ChoiceType::class, [
                'label' => 'sylius.form.image.type',
                'required' => false,
                'choices' => ['' => ''] + $this->getImagesType(),
            ]);
    }

    public static function getExtendedTypes(): array
    {
        return [
            ProductImageType::class,
        ];
    }

    private function getImagesType(): array
    {
        return [
            'bitbag_sylius_multiple_product_image.media.type.product_background' => ProductInterface::BACKGROUND_PRODUCT,
            'bitbag_sylius_multiple_product_image.media.type.tail_package_thumbnail_product' => ProductInterface::TAIL_PACKAGE_THUMBNAIL_PRODUCT,
            'bitbag_sylius_multiple_product_image.media.type.wide_banner_thumbnail_catalog' => ProductInterface::WIDE_BANNER_THUMBNAIL_CATALOG,
            'bitbag_sylius_multiple_product_image.media.type.products_list_miniature' => ProductInterface::PRODUCT_MINIATURE,
        ];
    }
}