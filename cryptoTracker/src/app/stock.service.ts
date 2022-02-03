import { Injectable } from '@angular/core';
import {Stock} from "./stock";
import {mockStock } from "./mock-stock";
import {Observable, of, single} from "rxjs";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class stockService {

  oldkey= "HNRFC6XKA19ATR4J";

  key= "6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
  url= "https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"

  customUrl = ""

  constructor(private HttpClient:HttpClient) { }


  getData(){

    return this.HttpClient.get(this.url);
  }


  getAPIData(url: string){
    return this.HttpClient.get(url);
  }


  getStocks(): Stock[]{
    return mockStock
  }


  getSingleStock(symbol: string){
    const singleStock = mockStock.find(h => h.symbol === symbol)!;
    return singleStock

  }

  getStock(symbol: string): Observable<Stock> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const stock = mockStock.find(h => h.symbol === symbol)!;

    return of(stock);
  }
}
