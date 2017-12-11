import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-router002',
  templateUrl: './router002.component.html',
  styleUrls: ['./router002.component.css']
})
export class Router002Component implements OnInit {

  constructor(private router: Router) { }

  toIndex() {
    this.router.navigate(["/index"]);
  }

  toRouter005() {
    this.router.navigate(["/router005",666]);
  }
  toRouter007() {
    this.router.navigate(['router007'], {  
      queryParams: {  
          id: 88,  
          title: 'xiaobao'  
      }  
  });  
  }

  ngOnInit() {
  }

}
