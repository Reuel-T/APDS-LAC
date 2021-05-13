import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ThrowStmt } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private orders : Order[] = [];
  private updatedOrders = new Subject<Order[]>();

  constructor(private http: HttpClient) { }
  
  getPostUpdateListener()
  {
    return this.updatedOrders.asObservable();
  }
  //gets the orders from the API
  getOrders()
  {
    this.http.get<{message: string, orders: any}>('https://localhost:3000/api/orders')
      .pipe(map((orderData) => 
      {
        return orderData.orders.map(order => 
          {
            return{
              username : order.username,
              email : order.email,
              placedOrder : order.placedOrder,
              id: order._id
            };
          });
      }))
      .subscribe((changedOrders) => 
      {
        this.orders = changedOrders;
        this.updatedOrders.next([...this.orders]);
      });
  }


  addOrders(username: String, email: String, details: String)
  {
    const order: Order =  {
                            id: null,
                            username : username,
                            email : email,
                            placedOrder : details 
                          };

    this.http.post<{message: string}>('https://localhost:3000/api/orders',order)
      .subscribe((responseData) => 
        {
          console.log(responseData.message);
          this.orders.push(order);
          this.updatedOrders.next([...this.orders]);    
        })    
  }

  deleteOrder(orderID : string)
  {
    this.http.delete('https://localhost:3000/api/orders/' + orderID)
        .subscribe(() => 
        {
            const updatedOrdersDel = this.orders.filter(order => order.id !== orderID);
            this.orders = updatedOrdersDel;
            this.updatedOrders.next([...this.orders]);
            console.log(`Order with ID ${orderID} deleted`);
        });
  }
}
