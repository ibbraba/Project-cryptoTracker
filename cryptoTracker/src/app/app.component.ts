import { Component } from '@angular/core';
import {LoaderServiceService} from "./loader-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CryptoTracker';
  loading$= this.loader.loading$
  constructor(private loader:LoaderServiceService, private Http: HttpClient) {
  }
}
