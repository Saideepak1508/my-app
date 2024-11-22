import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _httpclient:HttpClient) { }
  getweather():Observable<any> {
    return this._httpclient.get("https://stackblitz.com/edit/base-angular-12-app-x6cray?file=src%2Fapp%2Fapp.component.html");
  }
}
