import { Component, OnInit } from '@angular/core';
import { Location }     from '@angular/common';

@Component({
  selector: 'app-router001',
  templateUrl: './router001.component.html',
  styleUrls: ['./router001.component.css']
})
export class Router001Component implements OnInit {

  constructor(
    private location: Location
  ) { }
  
  goBack(): void {
    this.location.back();
  }
  
  ngOnInit() {
  }

}
