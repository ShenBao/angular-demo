import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observable001',
  templateUrl: './observable001.component.html',
  styleUrls: ['./observable001.component.css']
})
export class Observable001Component implements OnInit {

  constructor() {

    var subscription =  Observable.from([1,2,3,4])//from是自带的方法会帮你创建一个流，还有fromEvent事件,fromPromise异常,fromEventPattern等
      .filter(e => e%2 ==0)//filter过滤条件
      .map(e => e*e)//得到求平方的流
      .subscribe(//订阅然后作出处理方法
        e => console.log(e),//观察者
        error => console.error(error),//观察者
        () =>console.log("结束了")//观察者
      );

  }

  ngOnInit() {
  }

}
