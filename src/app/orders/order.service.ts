import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private orders : Order[] = [];
  private updatedOrders = new Subject<Order[]>();

  constructor() { }

  getOrders()
  {

    return [...this.orders];
  }

  getPostUpdateListener()
  {
    return this.updatedOrders.asObservable();
  }

  addOrder(username: String, email: String, details: String)
  {
    const order: Order =  {
                            username : username,
                            email : email,
                            placedOrder : details
                          };

    this.orders.push(order);
    this.updatedOrders.next([...this.orders]);
    
    /*
    console.log("Spread");
    console.log(...this.orders);
    console.log("Straight Return");
    console.log(this.orders);
    */
  }

}
