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

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input() stock?: Stock

  symbol =  String(this.route.snapshot.paramMap.get('symbol'));
  singleStock: any
  stockName: any
  loading$= this.loader.loading$
  callAPIError: any
  perfResult : any
  ApiDataIsFetched : boolean = false

  // Perfomance measures

  open: number = 0
  close : number = 0



  constructor(
    private route: ActivatedRoute,
    private stockService: stockService,
    private location: Location,
    private urlService: UrlService,
    public loader: LoaderServiceService,
    private httpClient: HttpClient,

    public perfService: StockPerformanceService)
  {
    this.stockService.getAPIData(this.url).subscribe(
      dataFeteched =>{ this.singleStock=dataFeteched,
                            this.ApiDataIsFetched = true
                            this.open = this.singleStock.results[0].o
                            this.close = this.singleStock.results[0].c
                            console.log(this.ApiDataIsFetched) },


      error => { this.callAPIError=error ,console.log("Error ! ", error) }

    )

 /*   getDataPerfomance(stock){
    /!* if (this.ApiDataIsFetched){*!/
    let open : any = 60
    let close : any = 75
    this.perfResult =  this.perfService.getVariation( open, close)
    console.log(open + " = open"  )
    console.log(close + " = close"  )*/

  }



  ngOnInit(): void {
    this.getStock()
    // console.log(this.url)
    this.getStockName()
    // console.log(this.symbol + " Symbol ")
   // this.getDataPerfomance()
  }



  getStockName() {
    this.stockName = this.stockService.getSingleStock(this.symbol)
  }

  getStock(): void {
    let symbol = this.urlService.getSymbol();
    this.stockService.getStock(symbol)
      .subscribe(stock => this.stock = stock);
  }

  url:string  = "https://api.polygon.io/v2/aggs/ticker/" + this.symbol +  "/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"



  yearDebut: number = new Date("2022-01-02").getTime()
  today: number= Date.now()


  getPerfomancce(){
     this.perfResult = this.perfService.getAllPerformanceData(this.open, this.close)
      console.log(this.perfResult)

  }


  // Custom URL OK
  // Call API
  // Render SingleStock
  // Chart JS ...

  goBack(): void {
    this.location.back()
  }

}
