import { Component, OnInit, Input } from '@angular/core';
import { Stock } from "../stock";
import { stockService } from "../stock.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import {LoaderServiceService} from "../loader-service.service";
import {HttpClient} from "@angular/common/http";
import  { mockStock } from "../mock-stock";
import {UrlService} from "../url.service";
import {StockPerformanceComponent} from "../stock-performance/stock-performance.component";
import {StockPerformanceService} from "../stock-performance.service";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input()

  stock?: Stock



  faArrowUp= faArrowUp

  symbol =  String(this.route.snapshot.paramMap.get('symbol'));
  singleStock: any
  stockName: any
  loading$= this.loader.loading$
  callAPIError: any
  perfResult : any

  url:string  = "https://api.polygon.io/v2/aggs/ticker/" + this.symbol +  "/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
  ApiDataIsFetched : boolean = false



  // Perfomance measures



  apiData: {} = {}
  open : any
  close : any 


  constructor(
    private route: ActivatedRoute,
    private stockService: stockService,
    private location: Location,
    private urlService: UrlService,
    public loader: LoaderServiceService,
    private httpClient: HttpClient,
    public library: FaIconLibrary,
    public perfService: StockPerformanceService)
  {



 /*   getDataPerfomance(stock){
    /!* if (this.ApiDataIsFetched){*!/
    let open : any = 60
    let close : any = 75
    this.perfResult =  this.perfService.getVariation( open, close)
    console.log(open + " = open"  )
    console.log(close + " = close"  )*/

  }



  ngOnInit(): void {
    console.log(this.ApiDataIsFetched);
    
    this.callApi()
    
    console.log(this.ApiDataIsFetched);


    this.library.addIconPacks(fas)

    this.getStock()
    // console.log(this.url)
    this.getStockName()
    
    console.log(this.apiData)
    // console.log(this.symbol + " Symbol ")
    
  }



/*
  switchData(){
    this.apiData = !this.apiData
    console.log(this.apiData)
  }
*/

  callApi(){
    this.stockService.getAPIData(this.url).subscribe(
      dataFeteched =>{ this.singleStock=dataFeteched,
        this.ApiDataIsFetched = true
         
        },


      error => { this.callAPIError=error ,console.log("Error ! ", error) },
     

      
      
    )
    
   
    //this.open  = this.singleStock.results[0].o
    //this.close = this.singleStock.results[0].c

  }







  /*today: number= Date.now()
  yearDebut: number = new Date("2022-01-02").getTime()*/

/*

  getPerformance(){

    this.perfResult = this.perfService.getAllPerformanceData(this.open, this.close)

  }
*/


  // Custom URL OK
  // Call API
  // Render SingleStock
  // Chart JS ...

  goBack(): void {
    this.location.back()
  }

/*  isPerfShown: boolean = false ; // hidden by default

  togglePerfShow() {

    this.isPerfShown = ! this.isPerfShown;


  }*/






  //MockStock
  getStockName() {
    this.stockName = this.stockService.getSingleStock(this.symbol)
  }


  //MockStock
  getStock(): void {
    let symbol = this.urlService.getSymbol();
    this.stockService.getStock(symbol)
      .subscribe(stock => this.stock = stock);
  }
}
