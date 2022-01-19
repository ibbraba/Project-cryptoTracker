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
    let url = "http://api.marketstack.com/v1/tickers?access_key=46f97a8dd5ebdadb0e096faf271be26d"
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
