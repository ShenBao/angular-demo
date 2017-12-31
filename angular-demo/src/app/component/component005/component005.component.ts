import { Component, OnInit } from '@angular/core';

let styles =  `
h1 {
  color: red;
}

p {
  font-size: 10px;
  font-weight: 900;
}
`;

@Component({
  selector: 'app-component005',
  templateUrl: './component005.component.html',
  styles: [styles]
})
export class Component005Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
