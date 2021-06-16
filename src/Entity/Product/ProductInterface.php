<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMultipleProductImageUploader\Entity\Product;

use Sylius\Component\Core\Model\ProductInterface as BaseProductInterface;

interface ProductInterface extends BaseProductInterface
{
    public const TAIL_PACKAGE_THUMBNAIL_PRODUCT = 'TAIL_PACKAGE_THUMBNAIL_PRODUCT';

    public const BACKGROUND_PRODUCT = 'BACKGROUND_PRODUCT';

    public const TAIL_PACKAGE_THUMBNAIL_HOMEPAGE = 'TAIL_PACKAGE_THUMBNAIL_HOMEPAGE';

    public const WIDE_BANNER_THUMBNAIL_CATALOG = 'WIDE_BANNER_THUMBNAIL_CATALOG';

    public const PRODUCT_MINIATURE = 'PRODUCT_MINIATURE';

    public function getFile(): ?array;

    public function setFile(?\SplFileInfo $file): void;

    public function hasFile(): bool;
}