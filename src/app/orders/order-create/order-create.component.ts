import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order } from '../order.model'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  constructor() { }

  //Basically a broadcast object, from what I can see
  @Output() orderCreated = new EventEmitter<Order>();

 

  enteredUserName = ``;
  enteredEmail = ``;
  enteredOrder = ``;

  usernameError = `username is invalid`;
  emailError = `email is invalid`;


  ngOnInit(): void {
  }

  //So, this method makes an emit
  //populates the order object and then
  //emits it
  Order_Clicked()
  {
    const order : Order = {
      username: this.enteredUserName,
      email: this.enteredEmail,
      placedOrder: this.enteredOrder
    }
    //whatever is insied the brackets gets emitted
    console.log(order);
    this.orderCreated.emit(order);  
  }

  onAddOrder(OrderForm: NgForm)
  {
    
    if(OrderForm.invalid)
    {
      return;
    }
    else
    {
      const order : Order = {
        username: this.enteredUserName,
        email: this.enteredEmail,
        placedOrder: this.enteredOrder
      }
      //whatever is insied the brackets gets emitted
      console.log(order);
      console.log(OrderForm.invalid);
      this.orderCreated.emit(order);  
    }
    

  }
}
