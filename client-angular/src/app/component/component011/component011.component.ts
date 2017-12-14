import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component011',
  templateUrl: './component011.component.html',
  styleUrls: ['./component011.component.css']
})
export class Component011Component implements OnInit {

  colspanSize: number = 2;

  inputVal: string = 'this is input val'

  divClass: string;

  isC: boolean = false;

  ngClass: Object = {
    a: true,
    b: false,
    c: true
  };

  isDev: boolean = true;

  ngStyle: Object = {
    color: '#3366AA',
    fontSize: '20px'
  }

  constructor() {
    setTimeout(()=>{
      this.divClass = 'a b';
    },3000);

    setTimeout(()=>{
      this.isC = true;
    },5000);

  }

  ngOnInit() {
  }

}
