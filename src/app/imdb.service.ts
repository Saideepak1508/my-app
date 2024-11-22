import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private _httpclient:HttpClient) { }
  getImdb():Observable<any>{
    return this._httpclient.get("https://dummyapi.online/api/movies");
  }
}
