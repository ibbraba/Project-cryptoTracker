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


  //Range stocks
  RangeUrl: string = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/week/2022-01-03/2022-02-07?adjusted=false&sort=asc&limit=20&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
  RangeData: any = []
  RangeDataResult: any = []

  constructor(public stockService: stockService, public loader: LoaderServiceService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getStocks();
  }


  callAllStocks(){
    this.stocks.forEach(
      stock => this.stockService.getAPIData(stock.url).subscribe(
        dataFeteched =>{ this.StockResult.push(dataFeteched), console.log(this.StockResult) },
        error => this.error = true
      )
    )}



  callRangeData() {
    this.stockService.getAPIData(this.RangeUrl).subscribe(
      rangeData => {
        this.RangeData = rangeData
      },
      error => this.error = true
    )

    for (let i = 0; i < this.RangeData.results.length; i++) {
      this.RangeDataResult.push(this.RangeData.results[i].o)
    }

    return this.RangeDataResult
  }


    getChart(){
      this.callRangeData()

      let ctx:any = document.getElementById("chart")
      console.log( ctx)
      let chartCanvas = new Chart(ctx , {
        type: 'line',
        data : {
          labels: [1,2,3,4,5],
          datasets:[{
            label : "Apple Weekly Trend Chart",
            data : this.RangeDataResult,
            fill: true,
            backgroundColor: "#00f4ff"
          }]
        }
      })
    }




  getStocks(): void{
    this.stocks = this.stockService.getStocks()
  }





}
