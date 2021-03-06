import { Component, AfterContentInit, AfterContentChecked, AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-lifecycle006',
  templateUrl: './lifecycle006.component.html',
  styleUrls: ['./lifecycle006.component.css']
})
export class Lifecycle006Component implements AfterContentInit,
  AfterContentChecked, AfterViewInit {

  constructor() { }

  message = "hello";

  ngAfterContentInit(): void {
    console.log("父组件投影内容初始化完毕");
    this.message = "hello world";
  }

  ngAfterContentChecked(): void {
    console.log("父组件投影内容变更检测完毕");
  }

  ngAfterViewInit(): void {
    console.log("父组件视图内容初始化完毕");
  }

  title = 'app works!';



}
