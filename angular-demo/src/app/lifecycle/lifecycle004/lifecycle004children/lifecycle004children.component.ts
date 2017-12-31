import {Component, OnInit, AfterViewChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-lifecycle004children',
  templateUrl: './lifecycle004children.component.html',
  styleUrls: ['./lifecycle004children.component.css']
})
export class Lifecycle004childrenComponent implements OnInit {

  ngAfterViewInit(): void {
    console.log("子组件的视图初始化完毕");
  }

  ngAfterViewChecked(): void {
    console.log("子组件的视图变更检测完毕");
  }

  constructor() { }

  ngOnInit() {
  }

  greeting(name:string) {
    console.log("hello "+name);
  }
}
