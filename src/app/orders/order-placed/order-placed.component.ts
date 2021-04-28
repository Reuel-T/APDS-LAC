import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from '../order.model'

import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit, OnDestroy {


  orders: Order[] = [];

  constructor(public orderService: OrderService) { }

  private orderSubscription : Subscription;

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
  }


  ngOnInit(): void {
    this.orderService.getOrders();
    this.orderSubscription = this.orderService.getPostUpdateListener()
      .subscribe((orders:Order[]) => 
      {
        this.orders = orders
      }
    );
  }

  onDelete(orderID : string): void 
  {
    this.orderService.deleteOrder(orderID);
  }

}
