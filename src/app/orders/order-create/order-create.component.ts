import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  constructor() { }

  @Output() orderCreated = new EventEmitter();

  newOrder = ``;
  userName = ``;

  enteredUserName = ``;
  enteredEmail = ``;
  enteredOrder = ``;

  order = {};


  ngOnInit(): void {
  }

  Order_Clicked()
  {
    this.order = {
      UserName: this.enteredUserName,
      Email: this.enteredEmail,
      PlacedOrder: this.enteredOrder
    }
    this.orderCreated.emit(this.order);  
  }

  

}
