import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() a:number=0;

  @Output() bEvent:EventEmitter<number>= new EventEmitter();
  
  send(){
    this.bEvent.emit(10);
  }
  @Input() max: number = 50;  // Set the max character limit
  text: string = '';

            // Stores the text entered by the user
//  @Output() input:EventEmitter<number> = new EventEmitter();

  onInput() {
    if (this.text.length > this.max) {
      this.text = this.text.substring(0, this.max);  // Trim the text if it exceeds the max limit
    }
  }
}



