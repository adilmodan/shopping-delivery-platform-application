import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

const friendsUrl = "http://localhost:3000/friends"
@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriendsList(): Observable<any[]>{
    return this.http.get<any[]>(friendsUrl)
  }
}
