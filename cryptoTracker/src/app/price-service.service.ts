import { Injectable } from '@angular/core';

import { stockService } from './stock.service';

@Injectable({
  providedIn: 'root'
})
export class PriceServiceService {

  constructor(private stockService: stockService,) { }

  isFetched:boolean = false; 
  
  
  urlStart: String = "https://api.polygon.io/v2/aggs/ticker/" 
  urlEnd: String = "/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"
  url: any
  singleStock:any
  callAPIError: any


 
    //FETCH
    callApi(symbol: String) {
      this.url = this.urlStart+ "" + symbol + "" + this.urlEnd
      var result 
      var closeValue 
    
      if(this.isFetched == false ){
      
        return this.singleStock = this.stockService.getAPIData(this.url).subscribe({
        // next: (v) => console.log(v),  
        next : (data) => result = data,
        error:  (error) =>  console.log(error),
        complete: ()=> console.log("OK")
        
        })
       

      
       
       } else{
      return result
    }
  }


}




