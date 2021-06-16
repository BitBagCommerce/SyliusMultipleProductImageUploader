<?php

declare(strict_types=1);

namespace BitBag\SyliusMultipleProductImageUploader\Controller\Admin;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class DropzoneImageUploader
{
    public function __invoke(Request $request): Response
    {
        return new JsonResponse('ok');
    }
}