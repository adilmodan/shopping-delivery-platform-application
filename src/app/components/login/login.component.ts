import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  handleSubmit() {
    this.loginService.login(this.model)
      .subscribe((data) => {
        this.router.navigate(['/home'])
      }, (err) => {
        console.log(err)
      })
  }
}
