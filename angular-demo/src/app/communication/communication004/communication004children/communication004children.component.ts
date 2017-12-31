import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication004children',
  templateUrl: './communication004children.component.html',
  styleUrls: ['./communication004children.component.css']
})
export class Communication004childrenComponent implements OnInit {

  msg: string = '这是子组件的数据';

  clickFn(){
    console.log('这是子组件的方法')
  }
  constructor() { }

  ngOnInit() {
  }

}
