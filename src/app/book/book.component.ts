import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  public title = "default";

  bordered = {
    active: 1,
    options: ["bordered", "unbordered"]
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  toggleBorders() {
    this.bordered.active = (this.bordered.active + 1) % 2;
  }
}
