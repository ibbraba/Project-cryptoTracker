import { Injectable } from '@angular/core';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';

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
   
    console.log("Open " + open + " close " + close + " % " );


    this.gain = this.getGain(open, close)
    this.variation = this.getVariatione(open, close)



    return [this.gain, this.variation]

  }




  getGain(open : any, close: any){
    // If oldPrice = todayPrice  => true (Green Bgc)
    let valueUp:boolean
    return open > close ? valueUp = false : valueUp = true
  }

  getVariatione(open : number, close: number){
    //Calcul variation : VA-VD / VD
    let numerateur = close - open;

    var percentage = numerateur / close * 100;



    return percentage.toFixed(2)
  }



}
