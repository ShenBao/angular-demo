import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe001',
  templateUrl: './pipe001.component.html',
  styleUrls: ['./pipe001.component.css']
})
export class Pipe001Component implements OnInit {

  date: Date = new Date();

  nowDate: Date = new Date();

  pi: number = 3.141592654;

  size: number = 7;

  
  constructor() {
    setInterval(()=>{
      this.nowDate = new Date();
    },1000);

  }

  ngOnInit() {
  }

}
