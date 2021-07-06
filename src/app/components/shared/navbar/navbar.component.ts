import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'

import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public user:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.user.logout();
    this.router.navigate(['/'])
  }
}
