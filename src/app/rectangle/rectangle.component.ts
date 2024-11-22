import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  length:number = 0;
  breadth:number =0;
  // area:number = 0;
  // Perimeter:number = 0;
  result:number = 0;

  Area(length: number, breadth: number) {
    this.result = this.length * this.breadth;
  
  }
  perimeter(length: number, breadth: number) {
    this.result = 2 * (this.length + this.breadth);
  }


  // reset() {
  //   this.area = 0;
  //   this.Perimeter = 0;
  // }

}
