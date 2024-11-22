import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos:any= [];
  constructor(private _photosService:PhotosService){
    _photosService.getphoto().subscribe(
      (data: any) => {
        this.photos = data;
      },
      (err: any) => {
        alert("Error");
      }

    )
  }

}
