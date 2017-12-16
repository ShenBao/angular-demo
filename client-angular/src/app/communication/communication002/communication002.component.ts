import { Component, OnInit } from '@angular/core';
import { Obj } from './communication002children/communication002children.component'

@Component({
  selector: 'app-communication002',
  templateUrl: './communication002.component.html',
  styleUrls: ['./communication002.component.css']
})
export class Communication002Component implements OnInit {


  obj: Obj = new Obj("", 0);

  lastPriceHandler(event: Obj) {
    this.obj = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
