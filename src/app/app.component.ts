import { Component } from '@angular/core';
import { Order } from './orders/order.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apds-lac-the-second-coming';
  //stores all the orders made in order-create
  storedOrders : Order[] = [];

  //receives the order object and then adds to the list
  onOrderCreated(order)
  {
    this.storedOrders.push(order);
  }

}
