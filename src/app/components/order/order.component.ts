import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Order } from 'src/app/models/order';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

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

  addToOrder() {
    const data = {
      name: this.name,
      price: this.price,
      description: this.description,
      quantity: this.quantity,
      image: this.image
    }

    alert("This has been added to cart.")
    this.addItem();
    this.foodService.addToOrder(data);

  }

  addItem() {
    this.count = ++this.count
  }

  fetchOrders() {
    this.foodService.getOrders().subscribe((data: Order[]) => {
      this.foods = data
    })
  }

  message() {
    alert("Your order has been submitted.")
  }

}
