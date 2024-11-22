import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityCardService {

  constructor(private _httpclient:HttpClient) { }

  getidentity(): Observable<any> {
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student');
  }

  delete(id:string): Observable<any>{
    return this._httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }

  getfilteridentity(term:string): Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);

  }

  getsortidentity(coloum:string ,order:string): Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+coloum+"&order="+order);
  }





}