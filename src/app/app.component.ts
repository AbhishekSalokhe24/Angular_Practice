import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ParentComponent } from '../componets/parent/parent.component';
import { ChildComponent } from '../componets/child/child.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abhishek_Angular';
}
