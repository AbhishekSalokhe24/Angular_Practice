import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

 message = 'hello frm PARENT';
 childMessage = '';

 receiveFromChild(data: string){
  this.childMessage = data;
 }




}
