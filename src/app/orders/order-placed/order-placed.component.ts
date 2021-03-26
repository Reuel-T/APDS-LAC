import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Order } from '../order.model'

import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit, OnDestroy {

  //receives from the parent component (I think)
  //probably why we have the array declared in app.component
  //@Input() orders : Order[] = [];

  orders: Order[] = [];

  constructor(public orderService: OrderService) { }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
