import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component013',
  templateUrl: './component013.component.html',
  styleUrls: ['./component013.component.css']
})
export class Component013Component implements OnInit {

  innerHtml: string = '<p>这是innerHTML渲染的</p>'
  
  constructor() { }

  ngOnInit() {
  }

}
