import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component003',
  templateUrl: './component003.component.html',
  styleUrls: ['./component003.component.css']
})
export class Component003Component implements OnInit {

  hero = {
    name: 'ShenBao'
  };

  constructor() { }

  ngOnInit() {
    
  }

}
