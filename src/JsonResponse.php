<?php


namespace App;



class JsonResponse extends \Symfony\Component\HttpFoundation\JsonResponse
{
    public function __construct($data, $code = 200)
    {
        parent::__construct();
        $this->setJson($data);
        $this->setStatusCode($code);
    }
}