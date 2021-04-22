import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private orders : Order[] = [];
  private updatedOrders = new Subject<Order[]>();

  constructor(private http: HttpClient) { }

  getOrders()
  {
    this.http.get<{message: string, orders: Order[]}>('https://localhost:3000/api/orders')
      .subscribe((orderData) => 
      {
        this.orders = orderData.orders;
        this.updatedOrders.next([...this.orders]);
      });
  }

  getPostUpdateListener()
  {
    return this.updatedOrders.asObservable();
  }

  addOrders(username: String, email: String, details: String)
  {
    const order: Order =  {
                            id: null,
                            username : username,
                            email : email,
                            placedOrder : details
                          };

    this.orders.push(order);
    this.updatedOrders.next([...this.orders]);
  }

}
