<?php

declare(strict_types=1);

namespace BitBag\SyliusMultipleProductImageUploader;

use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class BitBagSyliusMultipleProductImageUploader extends Bundle
{
    use SyliusPluginTrait;
}
