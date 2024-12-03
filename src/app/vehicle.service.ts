import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl = 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'

  constructor( private _httpClient:HttpClient) { }

  getvehicles(): Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }
  getvehicle(id:string): Observable<any> {
    return this._httpClient.get(this.baseUrl+'/'+id);
  }

  
  getfilterVechileservice(term:string): Observable<any> {
    return this._httpClient.get( this.baseUrl+"filter=" + term);
  }


  getSortedVehicles(coloum:string, order:string): Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy=" + coloum + "&order=" + order)
  }

  updateVehicle(id:string, data:any): Observable<any> {
    return this._httpClient.put(this.baseUrl+'/'+id,data);
  }


  deleteVehicles(id:string): Observable<any> {
    return this._httpClient.delete(this.baseUrl+'/'+id);
  }


  getpagedVehicles(limit:number, page:number): Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=" +limit+"&page="+page);
  }



  createVehicles(data:any): Observable<any> {
    return this._httpClient.post(this.baseUrl,data);
  }




















}
