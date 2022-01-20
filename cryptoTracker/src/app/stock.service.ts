import { Injectable } from '@angular/core';
import {Stock} from "./stock";
import {mockStock } from "./mock-stock";
import {Observable, of} from "rxjs";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class stockService {

  key= "HNRFC6XKA19ATR4J"

  constructor(private HttpClient:HttpClient) { }


  getData(){

    let key = "6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
    let url = "https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
    return this.HttpClient.get(url);
  }

  getStocks(): Stock[]{
    return mockStock
  }

  getStock(id: number): Observable<Stock> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const stock = mockStock.find(h => h.id === id)!;

    return of(stock);
  }
}
