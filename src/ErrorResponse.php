<?php


namespace App;


use Symfony\Component\HttpFoundation\JsonResponse;

class ErrorResponse extends JsonResponse
{
    public function __construct(\Exception $exception, $status = 500)
    {
        $data = [
            'status' => 'error',
            'exception' => [
                'message' => $exception->getMessage(),
                'trace' => $exception->getTraceAsString(),
            ]
        ];
        parent::__construct($data, $status);
    }
}