import { Component, OnInit, EventEmitter, Output, Sanitizer, SecurityContext } from '@angular/core';
import { Order } from '../order.model'
import { NgForm } from '@angular/forms'

import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  constructor(public orderService : OrderService, private route: ActivatedRoute, protected sanitizer: DomSanitizer) { }

  output:string;
  output2:string;
 

  enteredUserName = ``;
  enteredEmail = ``;
  enteredOrder = ``;

  usernameError = `username is invalid`;
  emailError = `email is invalid`;


  ngOnInit(): void {
  }

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

      this.orderService.addOrders(oUsername, oEmail, oDetails);
      this.output = (this.sanitizer.sanitize(SecurityContext.HTML, OrderForm.value.postOrder));
      OrderForm.resetForm();
    }
  }
}
