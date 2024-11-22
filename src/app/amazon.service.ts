import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private _httpclient:HttpClient) { }

  getamazon(): Observable<any> {
    return this._httpclient.get('https://fakestoreapi.com/products');
  }
}
