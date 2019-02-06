<?php


namespace App;


class SuccessResponse extends JsonResponse
{
    public function __construct()
    {
        parent::__construct(['success' => true], 200);
    }
}