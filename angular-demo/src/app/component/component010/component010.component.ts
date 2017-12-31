import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component010',
  templateUrl: './component010.component.html',
  styleUrls: ['./component010.component.css']
})
export class Component010Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event)
  }
}
