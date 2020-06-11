import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.fillForm();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  fillForm() {
    this.form.patchValue({
      fullName: 'David Novotný',
      email: 'dd47@hey.com',
      message: 'Reactive form works!'
    });
  }

}
