import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle003',
  templateUrl: './lifecycle003.component.html',
  styleUrls: ['./lifecycle003.component.css']
})
export class Lifecycle003Component implements OnInit {

  // 可变对象与不可变对象
  // 内存中的存储

  greeting: string = "Hello";

  user: { name: string } = { name: "Tom" };


  constructor() { }

  ngOnInit() {
  }

}
