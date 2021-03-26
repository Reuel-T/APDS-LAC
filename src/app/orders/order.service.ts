import { Order } from './order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private orders : Order[] = [];

  constructor() { }

  getOrders()
  {
    // not sure why the activity included a spread operator when theres nothing
    // to "copy" or append to 
    return this.orders;
  }

  addOrder(username: String, email: String, details: String)
  {
    const order: Order =  {
                            username : username,
                            email : email,
                            placedOrder : details
                          };

    this.orders.push(order);
    console.log("Spread");
    console.log(...this.orders);
    console.log("Straight Return");
    console.log(this.orders);
  }

}
