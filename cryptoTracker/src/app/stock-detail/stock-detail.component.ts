import { Component, OnInit, Input } from '@angular/core';
import { Stock } from "../stock";
import { stockService } from "../stock.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input() stock?: Stock

  constructor(
    private route: ActivatedRoute,
    private stockService: stockService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStock()
  }

  getStock(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStock(id)
      .subscribe(stock => this.stock = stock);
  }

  goBack(): void {
    this.location.back()
  }

}
