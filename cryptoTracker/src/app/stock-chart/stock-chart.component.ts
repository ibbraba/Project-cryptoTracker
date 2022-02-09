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

  //Range stocks
  RangeUrl: string = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/week/2022-01-03/2022-02-07?adjusted=false&sort=asc&limit=20&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
  RangeData: any = []
  RangeDataResult: any = []
  error: boolean =false
  symbol = String(this.route.snapshot.paramMap.get('symbol'));


  constructor(private stockService: stockService,
              private route: ActivatedRoute,
              private location : Location,
              public loader: LoaderServiceService
) { }

  ngOnInit(): void {
  }

  DateTries(){
    let today = Date.now()

    console.log(today)
  }


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
    console.log(this.RangeDataResult)
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

}
