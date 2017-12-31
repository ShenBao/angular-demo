import { Component, OnInit } from '@angular/core';
import { Obj } from './communication003children/communication003children.component'

@Component({
  selector: 'app-communication003',
  templateUrl: './communication003.component.html',
  styleUrls: ['./communication003.component.css']
})
export class Communication003Component implements OnInit {


  obj: Obj = new Obj("", 0);

  buyHandler(event: Obj) {
    this.obj = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
