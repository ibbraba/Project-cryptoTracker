import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./stock/stock.component";
import {StockDetailComponent} from "./stock-detail/stock-detail.component";

const routes: Routes = [
  {path: "", redirectTo:"stock", pathMatch:"full"},
  {path: 'stock', component: StockComponent},
  {path: "detail/:symbol", component: StockDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
