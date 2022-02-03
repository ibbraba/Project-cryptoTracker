import { Component, OnInit, Input } from '@angular/core';
import { Stock } from "../stock";
import { stockService } from "../stock.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import {LoaderServiceService} from "../loader-service.service";
import {HttpClient} from "@angular/common/http";
import  { mockStock } from "../mock-stock";

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input() stock?: Stock

  symbol = String(this.route.snapshot.paramMap.get('symbol'));
  singleStock: any
  stockName: any
  loading$= this.loader.loading$

  constructor(
    private route: ActivatedRoute,
    private stockService: stockService,
    private location: Location,

    public loader: LoaderServiceService,
    private httpClient: HttpClient
  ) {
    this.stockService.getAPIData(this.url).subscribe(dataFeteched =>{

      this.singleStock=dataFeteched

      console.log(this.singleStock)

    })

  }

  ngOnInit(): void {
    this.getStock()
    console.log(this.url)
    this.getStockName()
  }

  getStockName() {
    this.stockName = this.stockService.getSingleStock(this.symbol)
  }

  getStock(): void {

    this.stockService.getStock(this.symbol)
      .subscribe(stock => this.stock = stock);
  }

  url:string  = "https://api.polygon.io/v2/aggs/ticker/" + this.symbol +  "/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"


  // Custom URL OK
  // Call API
  // Render SingleStock
  // Chart JS ...

  goBack(): void {
    this.location.back()
  }

}
