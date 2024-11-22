import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentData!: string;
  
  // some Data Frm Child 

  @Output() childEvent = new EventEmitter <string>();

  sendToParent(){
    this.childEvent.emit("Hello Frm CHILD");
  }

}
