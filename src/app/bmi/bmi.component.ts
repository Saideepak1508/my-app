import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height:number = 0;
  weight:number = 0;
  result:number=0;

  calculate(){
    this.result = this.weight/((this.height/100)*(this.height/100))
  }



}
