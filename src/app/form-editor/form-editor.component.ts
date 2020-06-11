import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  ngOnInit() {
  }
}
