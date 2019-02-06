<?php


namespace App;



class JsonResponse extends \Symfony\Component\HttpFoundation\JsonResponse
{
    public function __construct($data)
    {
        parent::__construct();
        $this->setContent($data);
    }
}