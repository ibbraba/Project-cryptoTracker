import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UrlService {


  constructor(  private route: ActivatedRoute,
                private location: Location,)
  { }

  getSymbol(){
    let symbol = String(this.route.snapshot.paramMap.get('symbol'));

    return symbol

  }

}
