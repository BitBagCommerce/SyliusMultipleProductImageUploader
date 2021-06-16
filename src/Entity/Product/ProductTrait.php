<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMultipleProductImageUploader\Entity\Product;

trait ProductTrait
{
    protected ?array $file;

    public function getFile(): ?array
    {
        return $this->file;
    }

    public function setFile($file): void
    {
        $this->file = $file;
    }

    public function hasFile(): bool
    {
        return count($this->file) > 0;
    }
}