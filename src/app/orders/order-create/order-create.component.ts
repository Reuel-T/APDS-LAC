import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  constructor() { }

  //Basically a broadcast object, from what I can see
  @Output() orderCreated = new EventEmitter();

 

  enteredUserName = ``;
  enteredEmail = ``;
  enteredOrder = ``;

  order = {};


  ngOnInit(): void {
  }

  //So, this method makes an emit
  //populates the order object and then
  //emits it
  Order_Clicked()
  {
    this.order = {
      UserName: this.enteredUserName,
      Email: this.enteredEmail,
      PlacedOrder: this.enteredOrder
    }
    //whatever is insied the brackets gets emitted
    this.orderCreated.emit(this.order);  
  }

  

}
