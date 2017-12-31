import { Component, OnInit } from '@angular/core';
import { Obj } from '../../communication/communication002/communication002children/communication002children.component';

@Component({
  selector: 'app-pipe001',
  templateUrl: './pipe001.component.html',
  styleUrls: ['./pipe001.component.css']
})
export class Pipe001Component implements OnInit {

  str: string = 'String';

  date: Date = new Date();

  nowDate: Date = new Date();

  pi: number = 3.141592654;

  size: number = 7;

  a:number = 8.2515;

  b:number = 156.548;

  obj: Object = {
    id: 88888,
    name: 'ShenBao'
  };
  childrenArray = [
    1,
    2,
    3,
    4
  ];

  childrenArray2 = [
    {
      id: 1,
      name: '1-1-1'
    },
    {
      id: 2,
      name: '2-2-2'
    },
    {
      id: 3,
      name: '3-3-3'
    },
    {
      id: 4,
      name: '4-4-4'
    }
  ]
  
  percentA: number = 0.259;
  percentB: number = 0.6578;


  constructor() {
    setInterval(()=>{
      this.nowDate = new Date();
    },1000);

  }

  ngOnInit() {
  }

}
