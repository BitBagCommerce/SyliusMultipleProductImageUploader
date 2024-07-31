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
use Sylius\Bundle\ProductBundle\Form\Type\ProductType as ProductFormType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\UX\Dropzone\Form\DropzoneType;

final class ProductTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('file', DropzoneType::class, [
                'attr' => [
                    'data-controller' => 'sylius',
                    'placeholder' => 'bitbag_sylius_multiple_product_image.media.dropzone_upload_placeholder',
                ],
                'multiple' => true,
            ])
            ->addEventListener(FormEvents::POST_SUBMIT, function (FormEvent $event) {
                /** @var ProductInterface $product */
                $product = $event->getData();

                if (empty($product->hasFile())) {
                    return;
                }

                $files = $product->getFile();

                $file = current($files);
                foreach ($product->getImages() as $image) {
                    if (null === $image->getId()) {
                        $image->setFile($file);
                        $file = next($files);
                    }
                }
            })
        ;
    }

    public static function getExtendedTypes(): array
    {
        return [
            ProductFormType::class,
        ];
    }
}
