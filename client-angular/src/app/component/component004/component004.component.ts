import { Component, OnInit } from '@angular/core';

const HEROES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-component004',
  templateUrl: './component004.component.html',
  styleUrls: ['./component004.component.css']
})
export class Component004Component implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
