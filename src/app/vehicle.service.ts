import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor( private _httpClient:HttpClient) { }

  getvechile(): Observable<any> {
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');
  }

  getfilterVechileservice(term:string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter=" + term);
  }


  getSortedVehicles(coloum:string, order:string): Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy=" + coloum + "&order=" + order)
  }


  deleteVehicles(id:string): Observable<any> {
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }


  getpagedVehicles(limit:number, page:number): Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=" +limit+"&page="+page);
  }



  createVehicles(data:any): Observable<any> {
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data);
  }




















}
