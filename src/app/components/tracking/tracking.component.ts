import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  placed() {
    alert("Your order has been placed, give us a few minutes to prepare it.")
  }

  picked() {
    alert("Your order has been picked up by John Doe.")
  }

  delivered() {
    alert("Your order will arrive shortly.")
  }

  message() {
    alert("Your order has been submitted.")
  }

}
