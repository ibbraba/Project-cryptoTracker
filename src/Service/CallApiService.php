<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;


class CallApiService {

    private $client;

    public function __construct(HttpClientInterface $client) {

        $this->client = $client;
    }

    public function  getYahooData(): array {
        $response = $this->client->request('GET', "https://query2.finance.yahoo.com/v7/finance/options/BTC-USD");


    return $response->toArray() ;

    }




}