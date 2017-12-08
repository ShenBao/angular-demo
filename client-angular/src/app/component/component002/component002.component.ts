import { Component, OnInit } from '@angular/core';

class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-component002',
  templateUrl: './component002.component.html',
  styleUrls: ['./component002.component.css']
})
export class Component002Component implements OnInit {

  hero: Hero = {
    id: 88,
    name: 'ShenBao'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
