import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
  imdbs:any=[];
  constructor(private imdbService:ImdbService) { 
    this.imdbService.getImdb().subscribe(
      (data:any)=>{
        this.imdbs = data;

      },
      (error:any)=>{
        alert("error, please try again");
      }
    )


  }

  Math = Math;

}
