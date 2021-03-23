import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apds-lac-the-second-coming';
  storedOrders = [];

  onOrderCreated(order)
  {
    this.storedOrders.push(order);
  }

}
