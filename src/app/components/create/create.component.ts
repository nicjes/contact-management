import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  @Output() create: EventEmitter<any> = new EventEmitter();

  id!: string;
  first_name!: string;
  last_name!: string;
  phone!: string;
  email!: string;

  constructor() {}

  emptyCheck(inputs: NodeListOf<HTMLInputElement>) {
    for (let input of inputs) {
      if (input.value !== '') {
        return false;
      }
    }
    return true;
  }

  paintRed(inputs: NodeListOf<HTMLInputElement>) {
    inputs.forEach((element) => (element.className = 'red'));
  }

  undoPaint() {
    const painted = document.querySelectorAll('.red');
    painted.forEach((element) => element.classList.remove('red'));
  }

  submit(form: NgForm) {
    const inputs = document.querySelectorAll('input');
    if (this.emptyCheck(inputs)) {
      this.paintRed(inputs);
      setTimeout(this.undoPaint, 1200);
    } else {
      const contact = {
        id: Date.now(),
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
      };

      this.create.emit(contact);
      form.resetForm();
    }
  }
}
