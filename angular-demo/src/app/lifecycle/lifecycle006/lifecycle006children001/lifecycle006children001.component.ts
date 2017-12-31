import { Component, OnInit, AfterContentChecked, AfterContentInit, OnDestroy } from "@angular/core";

@Component({
  selector: 'app-lifecycle006children001',
  templateUrl: './lifecycle006children001.component.html',
  styleUrls: ['./lifecycle006children001.component.css']
})
export class Lifecycle006children001Component implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    console.log("children1组件被销毁");
  }
  constructor() { }

  ngOnInit() {
  }

}
