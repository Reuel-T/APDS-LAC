import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  @Input() orders = [];

  constructor() { }


  ngOnInit(): void {
  }

}
