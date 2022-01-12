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

  selectedstock?: Stock;
  onSelect(stock: Stock): void {
    this.selectedstock = stock;
  }


  constructor(private stockService: stockService ) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void{
    this.stocks = this.stockService.getStocks()
  }

}
