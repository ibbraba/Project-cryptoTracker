import { Injectable } from '@angular/core';
import {Stock} from "./stock";
import {mockStock } from "./mock-stock";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class stockService {

  constructor() { }

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
