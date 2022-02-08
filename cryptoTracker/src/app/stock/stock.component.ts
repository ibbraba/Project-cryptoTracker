import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock";
import { mockStock } from "../mock-stock";
import {stockService} from "../stock.service";
import {LoaderServiceService} from "../loader-service.service";
import {HttpClient} from "@angular/common/http";
import {isEmpty} from "rxjs";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  stocks: Stock[] =[]
  StockResult:any = []
  StockResultErrors:any = []
  error: boolean =false

  loading$= this.loader.loading$
  singleStock: any
  callAPIError:[] = []


  //Range stocks
  RangeUrl: string = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/week/2022-01-03/2022-02-07?adjusted=false&sort=asc&limit=20&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
  RangeData: any = []

  constructor(public stockService: stockService, public loader: LoaderServiceService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getStocks();

   // this.callAllStocks()

  }


  callAllStocks(){
    this.stocks.forEach(
      stock => this.stockService.getAPIData(stock.url).subscribe(
        dataFeteched =>{ this.StockResult.push(dataFeteched), console.log(this.StockResult) },
        error => this.error = true
      )
    )}



  callRangeData(){
      this.stockService.getAPIData(this.RangeUrl).subscribe(
        rangeData => { this.RangeData.push(rangeData),  console.log(rangeData) },
        error => this.error = true
      )
    }






  getStocks(): void{
    this.stocks = this.stockService.getStocks()
  }





}
