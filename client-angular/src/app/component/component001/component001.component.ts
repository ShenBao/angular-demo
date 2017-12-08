import { Component, OnInit } from '@angular/core';

const template = `<h1>template字符模板</h1><h2>{{ title }}</h2>`;

@Component({
  selector: 'app-component001',
  // templateUrl: './component001.component.html',
  template: template,
  styleUrls: ['./component001.component.css']
})
export class Component001Component implements OnInit {

  title = 'this is template test';

  constructor() { }

  ngOnInit() {
  }

}
