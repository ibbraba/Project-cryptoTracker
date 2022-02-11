import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./stock/stock.component";
import {StockDetailComponent} from "./stock-detail/stock-detail.component";
import {StockPerformanceComponent} from "./stock-performance/stock-performance.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "home", component:HomePageComponent },
  {path: 'stock', component: StockComponent},
  {path: "detail/:symbol", component: StockDetailComponent},
  {path: "detail/performance/:symbol", component: StockPerformanceComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
