import { userData } from './../mocks/fake-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {
  @Input() form: FormGroup;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.fillForm();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  fillForm() {
    const user: User = this.dataService.getUserData2();

    this.form.patchValue({
      fullName: !!user.username.trim() ? user.username : null,
      email: !!user.email.trim() ? user.email : null,
      message: 'Reactive form works!'
    });
  }

}
