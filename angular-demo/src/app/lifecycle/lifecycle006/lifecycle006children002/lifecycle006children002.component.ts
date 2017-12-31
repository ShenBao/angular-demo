import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle006children002',
  templateUrl: './lifecycle006children002.component.html',
  styleUrls: ['./lifecycle006children002.component.css']
})
export class Lifecycle006children002Component implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log("children2组件被销毁");
  }

  constructor() { }

  ngOnInit() {
  }

}
