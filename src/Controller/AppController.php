<?php

namespace App\Controller;

use App\Service\CallApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;


class AppController extends AbstractController
{
    /**
     * @Route("/", name="app")
     * INDEX Page
     * TODO Retrieve information from bitcoin (add below 4 other cryptodata) + navigation to single crypto page
     * TODO Use Symfony UX for AJAX loading style
     * TODO Connect with API to find crypto data
     * TODO Highlight Trends
     * TODO Design With Bootstrap
     * TODO Responsive Design
     * @param CallApiService $callApiService
     * @param $client
     * @return Response
     */

    /*
     * TODO Application chart
     * Retrieves cryptocurrencies data, and give investment infos
     * Data: Current price, Open Price, Close Price, 52 week High/low, Avg high/low
     * Extra: Moving averages (200, 90, 30)
     *
     */





    public function index(CallApiService $callApiService): Response
    {
        $data = $callApiService->getYahooData();


        // Fetch Yahoo API on APPLE stock only





        return $this->render('app/index.html.twig', [
            'controller_name' => 'AppController',
            'data' => $data

        ]);
    }





}
