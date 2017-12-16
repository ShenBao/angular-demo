import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-communication002children',
  templateUrl: './communication002children.component.html',
  styleUrls: ['./communication002children.component.css']
})
export class Communication002childrenComponent implements OnInit {

  name: string = "榴莲";

  price: number = 10.008;

  @Output('priceChange')
  lastPrice: EventEmitter<Obj> = new EventEmitter();

  constructor() {
    setInterval(() => {

      let priceQuote: Obj = new Obj(this.name, 100 * Math.random());

      this.price = priceQuote.lastPrice;

      this.lastPrice.emit(priceQuote);

    }, 1000)
  }

  ngOnInit() {
  }

}

export class Obj {

  constructor(
    public name: string,
    public lastPrice: number
  ) {

  }

}
