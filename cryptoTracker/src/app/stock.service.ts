import { Injectable } from '@angular/core';
import {Stock} from "./stock";
import {mockStock } from "./mock-stock";


@Injectable({
  providedIn: 'root'
})
export class stockService {

  constructor() { }

  getStocks(): Stock[]{
    return mockStock
  }
}
