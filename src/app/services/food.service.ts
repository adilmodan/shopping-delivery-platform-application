import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order'
import { Feed } from 'src/app/models/feed';

const apiUrl = 'http://localhost:3000/orders'

const apiCart = 'http://localhost:3000/cart';

const apiFeed = 'http://localhost:3000/feed';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  orders: Order[] = [];

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(apiUrl)
  }

  getSingleOrder(id): Observable<Order> {
    return this.http.get<Order>(apiUrl + '/' + id)
  }

  addToOrder(data) {
    return this.http.post<Order>(apiUrl, data);
  }

  getFeeds(): Observable<Feed[]> {
    return this.http.get<Feed[]>(apiFeed);
  }

  getCart(): Observable<Order[]> {
    return this.http.get<Order[]>(apiCart);
  }
}
