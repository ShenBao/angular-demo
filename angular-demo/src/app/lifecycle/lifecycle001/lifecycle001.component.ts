import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle001',
  templateUrl: './lifecycle001.component.html',
  styleUrls: ['./lifecycle001.component.css']
})
export class Lifecycle001Component implements OnInit {

  name: string = 'XiaoBao';
  
  constructor() { }

  ngOnInit() {
  }

}
