import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-form005',
  templateUrl: './form005.component.html',
  styleUrls: ['./form005.component.css']
})
export class Form005Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }

  mobileValid: boolean = true;
  mobileUntouched: boolean = true;

  onMobileInput(form: NgForm) {
    if (form) {
      this.mobileValid = form.form.get("mobile").valid;
      this.mobileUntouched = form.form.get("mobile").untouched;
    }
  }
}
