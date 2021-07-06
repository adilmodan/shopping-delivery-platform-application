import { Injectable } from '@angular/core';
import { Observable, Subject, of, observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: UserService) { }

  private findUser(email: string, password: string): Observable<any> {

    var subject = new Subject<any>();
    this.userService.getUsers().subscribe((user: User[]) => {

      let isFound: User;

      // console.log('email: ' + email + ', password: ' + password)

      let findUserEmail = user.filter(u => u['email'] === email);

      // User email not found. There shold only be one user associated wih one email
      if (findUserEmail.length !== 1) {
        isFound = null;
      }
      else if (findUserEmail[0].password === password) {
        isFound = findUserEmail[0];
      }
      else {
        isFound = null;
      }
      subject.next(isFound);
    });

    return subject.asObservable();
  }

  login(creds: any): Observable<any> {

    const { email, password } = creds;

    return new Observable((observer) => {

      let test = this.findUser(email, password).subscribe(data => {

        if (data != null) {
          const user = {
            email: data['email'],
            token: data['api_token'] == null ? data['password'] : data['api_token'],
            id: data['id']
          }
          localStorage.setItem('user', JSON.stringify(user));
          observer.next(user);
        } else {
          //observer.error({ msg: 'Invalid Creds.' })
          alert('Invalid Credentials');
        }
      })
    })
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}
