import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-observable002',
  templateUrl: './observable002.component.html',
  styleUrls: ['./observable002.component.css']
})
export class Observable002Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onKey(val: string) {
    console.log(val);
  }



}
