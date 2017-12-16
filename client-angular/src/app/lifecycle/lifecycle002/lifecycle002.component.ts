import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle002',
  templateUrl: './lifecycle002.component.html',
  styleUrls: ['./lifecycle002.component.css']
})
export class Lifecycle002Component implements OnInit {

  // 可变对象与不可变对象
  // 内存中的存储

  greeting: string = "Hello";

  user: { name: string } = { name: "Tom" };

  constructor() { }

  ngOnInit() {
  }

}
