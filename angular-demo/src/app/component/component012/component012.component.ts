import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component012',
  templateUrl: './component012.component.html',
  styleUrls: ['./component012.component.css']
})
export class Component012Component implements OnInit {

  name: string = 'ziWei';

  ngModel: string = 'ngModel';

  doOnInput(event: any){

    const val = event.target.value;
    console.log(`这是DOM属性：${val}`);

    this.name = val;

  }

  constructor() { }

  ngOnInit() {
  }

}
