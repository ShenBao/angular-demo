import { Component, OnInit } from '@angular/core';
import { FormControlName, FormControl, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'app-form002',
  templateUrl: './form002.component.html',
  styleUrls: ['./form002.component.css']
})
export class Form002Component implements OnInit {

  formModel: FormGroup = new FormGroup({
    username: new FormControl("XiaoBao"),
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl("shenbaoone@gmail.com"),
      new FormControl("xiaobao@a.com"),
      new FormControl("xiaobao@b.com")
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }

}
