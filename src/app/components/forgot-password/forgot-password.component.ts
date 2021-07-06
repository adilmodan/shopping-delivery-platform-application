import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  model: any = {};
  emailFound: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    // Need to validate email
    this.userService.getUsers().subscribe((user: User[]) => {
      let tempArray = user.filter(u => u["email"] === this.model.emailBox.toString());
      if (tempArray.length === 0) {
        this.emailFound = false;
      } else {
        this.emailFound = true;
      }

      if (this.emailFound === true) {
        alert('Email containing instructions to change the password sent to: ' + JSON.stringify(this.model.emailBox));
        
      } else {
        alert('Email not found');
      }
    })

  }


}
