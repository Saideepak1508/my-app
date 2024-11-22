import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  amazons:any = [];
  constructor(private _amazonservice:AmazonService) {
    _amazonservice.getamazon().subscribe(
      (data:any)=>{
        this.amazons = data;
      },
      (error:any)=>{
        alert("error");
      }
    )
  }

}
