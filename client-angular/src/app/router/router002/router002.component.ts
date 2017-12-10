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

  ngOnInit() {
  }

}
