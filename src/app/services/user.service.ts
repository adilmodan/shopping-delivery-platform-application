import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/users"
const userUrl = "http://localhost:3000/users"
const addressUrl = "http://localhost:3000/addresses"
const paymentUrl = "http://localhost:3000/payments"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl)
  }

  postUser(user: User): Observable<any> {

    return this.http.post<User>(apiUrl, user);
  }

  getUserDetails(id): Observable<any> {
    return this.http.get<any>(userUrl + '/' + id)
  }

  updateUserDetails(data, id): Observable<any> {
    return this.http.put<any>(userUrl + '/' + id, data)
  }

  updateNewAddress(data): Observable<any> {
    return this.http.post<any>(addressUrl, data)
  }

  updateExistingAddress(data, id): Observable<any> {
    return this.http.put<any>(addressUrl + '/' + id, data)
  }

  getAddress(id): Observable<any> {
    return this.http.get<any>(addressUrl + '/' + id)
  }

  updateNewPayment(data): Observable<any> {
    return this.http.post<any>(paymentUrl, data)
  }

  updateExistingPayment(data, id): Observable<any> {
    return this.http.put<any>(paymentUrl + '/' + id, data)
  }

  getPayment(id): Observable<any> {
    return this.http.get<any>(paymentUrl + '/' + id)
  }
}
