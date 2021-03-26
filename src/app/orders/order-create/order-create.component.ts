import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order } from '../order.model'
import { NgForm } from '@angular/forms'

import { OrderService } from '../order.service';


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  constructor(public orderService : OrderService) { }

  //Basically a broadcast object, from what I can see
  @Output() orderCreated = new EventEmitter();

 

  enteredUserName = ``;
  enteredEmail = ``;
  enteredOrder = ``;

  usernameError = `username is invalid`;
  emailError = `email is invalid`;


  ngOnInit(): void {
  }

  /*
    So, this method makes an emit
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
  */

  onAddOrder(OrderForm: NgForm)
  {
    
    console.log(OrderForm.invalid);

    if(OrderForm.invalid)
    {
      return;
    }
    else
    {
      //We use the values of the input "name" fields (not the # ones)
      //Those are for use in html (I think)
      const oUsername : string = OrderForm.value.enteredUserName;
      const oEmail : string = OrderForm.value.enteredEmail;
      const oDetails : string = OrderForm.value.enteredOrder;

      this.orderService.addOrder(oUsername, oEmail, oDetails);
    }
  }
}
