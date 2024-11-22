import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _httpclient:HttpClient) { }
  getphoto():Observable<any> {
    return this._httpclient.get("https://picsum.photos/v2/list?page=1&limit=100");
  }
}
