import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

export class Product {
  constructor(public id: number,
    public name: string
  ) { }
}

@Component({
  selector: 'app-router013',
  templateUrl: './router013.component.html',
  styleUrls: ['./router013.component.css']
})


export class Router013Component implements OnInit {

  public resId: number;

  public resName: string;

  constructor(
    private routeInfo: ActivatedRoute
  ) {
    routeInfo.data.subscribe((data: { product: Product }) => {
      console.log(data)
      this.resId = data.product.id;
      this.resName = data.product.name;
    });
  }

  ngOnInit() {
  }

}

