import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form001',
  templateUrl: './form001.component.html',
  styleUrls: ['./form001.component.css']
})
export class Form001Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
  }

}
