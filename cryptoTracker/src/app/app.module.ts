import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewChild} from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MatButtonModule } from "@angular/material/button";
import {NetworkInterceptor} from "./network.interceptor";
import {NgChartsModule} from 'ng2-charts';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { StockPerformanceComponent } from './stock-performance/stock-performance.component'

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    StockDetailComponent,
    StockChartComponent,
    StockPerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgChartsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
