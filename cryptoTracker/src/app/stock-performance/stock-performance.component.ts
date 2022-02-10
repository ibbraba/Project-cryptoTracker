import { Component, OnInit } from '@angular/core';
import {StockPerformanceService} from "../stock-performance.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-stock-performance',
  templateUrl: './stock-performance.component.html',
  styleUrls: ['./stock-performance.component.css']
})
export class StockPerformanceComponent implements OnInit {

    symbol = String(this.route.snapshot.paramMap.get('symbol'));
    yearDebut: number = new Date("2022-01-02").getTime()
    today: number= Date.now()
    result : any


    // Several Urls : TODO: Generate a service for customs Url
  url:string = "https://api.polygon.io/v2/aggs/ticker/" + this.symbol +"/range/1/week/" + this.yearDebut + "/" + this.today +"?adjusted=true&sort=asc&limit=120&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"

  constructor(public stockPerformanceService: StockPerformanceService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
      this.getDataPerfomance()
    console.log(this.url)
  }


  getDataPerfomance(){
     this.result =  this.stockPerformanceService.getVariation( this.yearDebut, this.today)
    console.log(this.result)
  }

}
