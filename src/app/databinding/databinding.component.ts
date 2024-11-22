import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  age: number= 20;
  name: string = 'abc';
  isIndian: boolean = true;
  isinvalid: boolean = false;

  phone: string = '+91';
  create(){
    alert('Created successfully!!!');
  }

    typing(){
      alert('typing')
    }
  


  // ==============================================
num1:number = 0;
num2:number = 0;
result:number = 0;


sum(){
  this.result = this.num1 + this.num2;

}



}

























