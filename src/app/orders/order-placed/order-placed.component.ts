import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order.model'

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  //receives from the parent component (I think)
  //probably why we have the array declared in app.component
  @Input() orders : Order[] = [];

  constructor() { }


  ngOnInit(): void {
  }

}
