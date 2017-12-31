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
  selector: 'app-component008',
  templateUrl: './component008.component.html',
  styleUrls: ['./component008.component.css']
})
export class Component008Component implements OnInit {

  heroes = HEROES;
  selectedHero = [];

  onSelect(hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }
  constructor() { }

  ngOnInit() {
  }

}
