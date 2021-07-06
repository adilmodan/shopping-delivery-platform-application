import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  foods: Order[] = [];

  count: number = 0;

  name: string = '';
  price: number = 0;
  description: string = '';
  quantity: number = 0;
  image: string = '';

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.foodService.getCart().subscribe((data: Order[]) => {
      this.foods = data
    })
  }

  message() {
    alert("Your order has been submitted.")
  }

}
