import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component009',
  templateUrl: './component009.component.html',
  styleUrls: ['./component009.component.css']
})
export class Component009Component implements OnInit {

  imgUrl: string = 'https://avatars0.githubusercontent.com/u/17973380?s=400&u=ff41b7df0b0ba2f8100059c00dc8e963a519cb12&v=4';

  constructor() { }

  ngOnInit() {
  }

  name: string = 'ziWei';
  value: string = '这是value属性的绑定';

  doOnInput(event: any){
    console.log(`这是DOM属性：${event.target.value}`)
    console.log(event.target.getAttribute('value'))
  }

}
