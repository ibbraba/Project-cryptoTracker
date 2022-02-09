import { Component, OnInit } from '@angular/core';
import { stockService} from "../stock.service";
import {Chart} from "chart.js";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import {LoaderServiceService} from "../loader-service.service";


@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {

  //URL
  symbol = String(this.route.snapshot.paramMap.get('symbol'));
  today:number = Date.now()
  //Range stocks
  RangeUrl: string = "https://api.polygon.io/v2/aggs/ticker/" + this.symbol +"/range/1/week/2022-01-03/" + this.today + "?adjusted=false&sort=asc&limit=20&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"


  //Managing API Call
  RangeData: any = []
  RangeDataResult: any = []
  error: boolean =false

  constructor(private stockService: stockService,
              private route: ActivatedRoute,
              private location : Location,
              public loader: LoaderServiceService
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
    }
    console.log(this.RangeDataResult)
    return this.RangeDataResult
  }

  getChart(){
    this.callRangeData()

    let ctx:any = document.getElementById("chart")
    console.log(ctx)
    let chartCanvas = new Chart(ctx , {
      type: 'line',
      data : {
        labels: [1,2,3,4,5],
        datasets:[{
          label : "2022" + this.symbol + " Weekly Trend Chart",
          data : this.RangeDataResult,
          fill: true,
          backgroundColor: "#003977"
        }]
      }
    })
  }

}
