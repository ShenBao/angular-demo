import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms";

@Component({
  selector: 'app-form003',
  templateUrl: './form003.component.html',
  styleUrls: ['./form003.component.css']
})
export class Form003Component implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: [''],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    })
  }

  onSubmit() {
    console.log(this.formModel.value);

  }

  ngOnInit() {
  }

}
