import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockPerformanceService {


  // Gloabal get statistiques Data
  // Cointaining fonction for each detailled statistic to show
  // Render in container


  // Init State
  gain : any = true
  variation : any = 0





  constructor() { }


  getAllPerformanceData(open:any , close:any){
    this.gain = this.getGain(open, close)
    this.variation = this.getVariatione(open, close)



    return [this.gain, this.variation]

  }




  getGain(oldPrice: number, todayPrice: number){
    // If oldPrice = todayPrice  => true (Green Bgc)
    let valueUp:boolean
    return oldPrice > todayPrice ? valueUp = false : valueUp = true
  }

  getVariatione(oldPrice: number, todayPrice: number){


    let percentage:number = todayPrice / oldPrice



    return percentage
  }



}
