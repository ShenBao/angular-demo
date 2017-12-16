import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-communication003children',
  templateUrl: './communication003children.component.html',
  styleUrls: ['./communication003children.component.css']
})
export class Communication003childrenComponent implements OnInit {

  name: string = "榴莲";

  price: number = 10.008;

  @Output('priceChange')
  lastPrice: EventEmitter<Obj> = new EventEmitter();

  @Output()
  buy: EventEmitter<Obj> = new EventEmitter();

  constructor() {
    setInterval(() => {

      let priceQuote: Obj = new Obj(this.name, 100 * Math.random());

      this.price = priceQuote.lastPrice;

      this.lastPrice.emit(priceQuote);

    }, 3000)
  }

  buyStock(event) {
    this.buy.emit(new Obj(this.name, this.price));
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