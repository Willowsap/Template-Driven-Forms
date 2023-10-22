import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultName = "Default"

  bordered = {
    active: 0,
    options: ["bordered", "unbordered"]
  }


  toggleBorders() {
    this.bordered.active = (this.bordered.active + 1) % 2;
  }
}
