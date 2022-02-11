import { Component, OnInit } from '@angular/core';
import { stockService} from "../stock.service";
import {Chart} from "chart.js";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import {LoaderServiceService} from "../loader-service.service";
import {UrlService} from "../url.service";


@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {

  //URL

  symbol : string =  String(this.route.snapshot.paramMap.get('symbol'));
  today:number = Date.now()
  //Range stocks
  RangeUrl: string = "https://api.polygon.io/v2/aggs/ticker/" + this.symbol +"/range/1/week/2022-01-03/" + this.today + "?adjusted=false&sort=asc&limit=20&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"


  //Managing API Call
  RangeData: any = []
  RangeDataResult: any = []
  error: boolean =false

  // Custom DateTime
  time: any = []
  customDateTime: any = []

  displayChart = false

  constructor(private stockService: stockService,
              private route: ActivatedRoute,
              private location : Location,
              public loader: LoaderServiceService,
              private urlService: UrlService
) { }

  ngOnInit(): void {
    console.log(this.RangeUrl)
    this.callRangeData()
  }



  callRangeData() {
    this.stockService.getAPIData(this.RangeUrl).subscribe(
      rangeData => {
        this.RangeData = rangeData
      },
      error => this.error = true
    )

    console.log(this.RangeData + "RangeData")

    for (let i = 0; i < this.RangeData.results.length; i++) {
      this.RangeDataResult.push(this.RangeData.results[i].o)
      this.time.push(this.RangeData.results[i].t)
    }
    console.log(this.RangeDataResult)
//    return this.RangeDataResult
  }

  getChart(){

    this.callRangeData()

    this.timeTries()

    let ctx:any = document.getElementById("chart")
    //console.log(ctx)
    let chartCanvas = new Chart(ctx , {
      type: 'line',
      data : {
        labels: this.customDateTime,
        datasets:[{
          label : "2022 " + this.symbol + " Weekly Trend Chart",
          data : this.RangeDataResult,
          fill: true,
          backgroundColor: "#8aff00"
        }]
      }
    })
  }



  timeTries(){

    for (let i = 0; i < this.time.length; i++) {
        //Transform Timestamp to Date DD/MM
      const unixtimestamp = this.time[i]

      const dateObject = new  Date(unixtimestamp)


      const customDate = dateObject.toLocaleString("fr-Fr", {day : "numeric"} ) + "/" + dateObject.toLocaleString("fr-Fr", {month : "numeric"} )
      this.customDateTime.push(customDate)
    }
    console.log(this.customDateTime)
    return this.customDateTime
  }


}
