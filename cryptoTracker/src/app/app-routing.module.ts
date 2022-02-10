import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./stock/stock.component";
import {StockDetailComponent} from "./stock-detail/stock-detail.component";
import {StockPerformanceComponent} from "./stock-performance/stock-performance.component";

const routes: Routes = [
  {path: "", redirectTo:"stock", pathMatch:"full"},
  {path: 'stock', component: StockComponent},
  {path: "detail/:symbol", component: StockDetailComponent},
  {path: "detail/performance/:symbol", component: StockPerformanceComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
