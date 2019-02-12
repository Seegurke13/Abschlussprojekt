<?php


namespace App;


class SuccessResponse extends JsonResponse
{
    public function __construct()
    {
        parent::__construct(json_encode(['success' => true]), 200);
    }
}