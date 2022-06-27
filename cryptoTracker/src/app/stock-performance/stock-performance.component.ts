import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {StockPerformanceService} from "../stock-performance.service";
import { ActivatedRoute } from "@angular/router";
import {UrlService} from "../url.service";
import { StockDetailComponent } from '../stock-detail/stock-detail.component';


@Component({
  selector: 'app-stock-performance',
  templateUrl: './stock-performance.component.html',
  styleUrls: ['./stock-performance.component.css']
})
export class StockPerformanceComponent implements OnChanges {

    @Input()  apiData :any;

    symbol =  String(this.route.snapshot.paramMap.get('symbol'));
    yearDebut: number = new Date("2022-01-02").getTime()
    today: number= Date.now()
    result : any
    perfResult : any
    open = 55
    close = 70


    // Several Urls : TODO: Generate a service for customs Url
  url:string = "https://api.polygon.io/v2/aggs/ticker/" + this.symbol +"/range/1/week/" + this.yearDebut + "/" + this.today +"?adjusted=true&sort=asc&limit=120&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"

  constructor(public stockPerformanceService: StockPerformanceService,
              private route: ActivatedRoute,
              private urlService : UrlService,
              ) {
    
    this.getPerformance()
  }


  ngOnChanges(changes:SimpleChanges): void {
   
  }



  getPerformance(){
//  TODO: Fix method returning undefined

  console.log("ApiData :" + this.apiData)
    this.perfResult = this.stockPerformanceService.getAllPerformanceData( this.open, this.close)
    
  }

  isPerfShown: boolean = false ; // hidden by default

  togglePerfShow() {
    console.log(this.apiData.open, this.apiData.close)
    this.isPerfShown = ! this.isPerfShown;
    this.apiData=[this.apiData.open, this.apiData.close]

  }


  /*
    showPerformanceData(){
      console.log(this.data)
    }
  */


}
