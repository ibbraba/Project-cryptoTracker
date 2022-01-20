import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock";
import { mockStock } from "../mock-stock";
import {stockService} from "../stock.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  stocks: Stock[] =[]

  stock: any;
  jsonStock: any;


  constructor(private stockService: stockService ) {
    this.stockService.getData().subscribe(dataFeteched =>{

      this.stock=dataFeteched


      console.log(this.stock)

    })


  }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void{
    this.stocks = this.stockService.getStocks()
  }



}
