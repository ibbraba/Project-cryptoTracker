import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock";
import { mockStock } from "../mock-stock";
import {stockService} from "../stock.service";
import {LoaderServiceService} from "../loader-service.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  stocks: Stock[] =[]

  stock: any;
  jsonStock: any;
  loading$= this.loader.loading$
  singleStock: any


  constructor(private stockService: stockService, public loader: LoaderServiceService, private httpClient: HttpClient) {
    this.stockService.getData().subscribe(dataFeteched =>{

      this.stock=dataFeteched
      console.log(this.stock)

    })


  }

  ngOnInit(): void {
    this.getStocks();

    console.log(this.stocks)
  }

  getStocks(): void{
    this.stocks = this.stockService.getStocks()
  }





}
