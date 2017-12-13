import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }
  
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
