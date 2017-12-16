import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecycle002children',
  templateUrl: './lifecycle002children.component.html',
  styleUrls: ['./lifecycle002children.component.css']
})
export class Lifecycle002childrenComponent implements OnInit, OnChanges {

  @Input()
  greeting: string;

  @Input()
  user: { name: string };

  message: string = "初始化消息";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
