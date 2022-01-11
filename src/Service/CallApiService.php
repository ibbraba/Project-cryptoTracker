<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;


class CallApiService {

    private $client;

    var $urls = [
        "yahoo" => "https://query2.finance.yahoo.com/v7/finance/options/AAPL",
        "bitcoin" => "https://query2.finance.yahoo.com/v7/finance/options/BTC-USD",
        "dogecoin" => "https://query2.finance.yahoo.com/v7/finance/options/DOGE-USD"

    ];

    public function __construct(HttpClientInterface $client) {

        $this->client = $client;
    }




    public function  getBTCData(): array {
        $response = $this->client->request('GET', "https://query2.finance.yahoo.com/v7/finance/options/BTC-USD");
        return $response->toArray() ;
    }


    public function  getMultiData(){


    }




}