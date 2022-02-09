import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock";
import { mockStock } from "../mock-stock";
import {stockService} from "../stock.service";
import {LoaderServiceService} from "../loader-service.service";
import  { Chart } from "chart.js"
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




  constructor(public stockService: stockService, public loader: LoaderServiceService, private httpClient: HttpClient) {}

  ngOnInit(): void {


  }








/*


  callAllStocks(){
    this.stocks.forEach(
      stock => this.stockService.getAPIData(stock.url).subscribe(
        dataFeteched =>{ this.StockResult.push(dataFeteched), console.log(this.StockResult) },
        error => this.error = true
      )
    )}
*/




  getStocks(): void{
    this.stocks = this.stockService.getStocks()
  }





}
