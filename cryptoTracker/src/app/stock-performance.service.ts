import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockPerformanceService {

  constructor() { }

  getVariation(oldPrice: number, todayPrice: number){
    // If oldPrice = todayPrice  => true (Green Bgc)
    let valueUp:boolean
    return oldPrice > todayPrice ? valueUp = false : valueUp = true
  }

  getPercentage(oldPrice: number, todayPrice: number){
    let percentage:number = oldPrice / todayPrice
     percentage.toFixed(2)
    percentage ++

    return percentage
  }



}
