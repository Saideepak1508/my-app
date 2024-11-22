import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  age: number=20;
  ages:number[]=[10,20,30,40,50];

  state:string = 'telangana';
  states:string[]= ['Andhra Pradesh', 'telangana','karnataka'];

  products:any=[
    {name:'pen',price:20},
    {name:'mobile',price:2000},
    {name:'pencil',price:10},
    {name:'eraser',price:5},
    {name:'laptop',price:45000}
  ]
  today:any= new Date();

 
}
