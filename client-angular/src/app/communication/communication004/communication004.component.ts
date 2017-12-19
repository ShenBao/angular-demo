import { Component, OnInit, ViewChild } from '@angular/core';
import { Communication004childrenComponent } from "./communication004children/communication004children.component";

@Component({
  selector: 'app-communication004',
  templateUrl: './communication004.component.html',
  styleUrls: ['./communication004.component.css']
})
export class Communication004Component implements OnInit {

  @ViewChild('children') children;   /*定义子组件 注意括号里面的东西和 #cart对应起来  */

  getChildrenData() {
    console.log(this.children.msg)
  }

  ChangeChildrenData() {
    this.children.msg = '数据已经被父组件改变';

  }

  constructor() { }

  ngOnInit() {
  }

}
