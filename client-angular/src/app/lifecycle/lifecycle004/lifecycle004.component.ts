import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked,OnDestroy } from "@angular/core";
import { Lifecycle004childrenComponent } from './lifecycle004children/lifecycle004children.component'

@Component({
  selector: 'app-lifecycle004',
  templateUrl: './lifecycle004.component.html',
  styleUrls: ['./lifecycle004.component.css']
})
export class Lifecycle004Component implements OnInit, AfterViewInit,
  AfterViewChecked,OnDestroy {

  message: string;
  
  timer: any;

  ngAfterViewInit(): void {
    console.log("父组件的视图初始化完毕");
    setTimeout(() => {
      this.message = "Hello";
    }, 0);

  }

  ngAfterViewChecked(): void {
    console.log("父组件的视图变更检测完毕");
  }

  ngOnDestroy(): void {
    // 可以注释掉这里看看 退出当前路由看看
    clearInterval(this.timer);
  }

  @ViewChild("children1")
  children1: Lifecycle004childrenComponent;

  constructor() { }

  ngOnInit(): void {
    let i = 0;
    this.timer = setInterval(() => {
      this.children1.greeting("Tom - " + i++);
    }, 1000);

  }
}
