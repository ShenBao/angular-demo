import { Component, OnInit, Input } from '@angular/core';
import { Obj } from '../communication003children/communication003children.component'

@Component({
  selector: 'app-communication003children002',
  templateUrl: './communication003children002.component.html',
  styleUrls: ['./communication003children002.component.css']
})
export class Communication003children002Component implements OnInit {

  @Input()
  obj: Obj;

  constructor() { }

  ngOnInit() {
  }

}
