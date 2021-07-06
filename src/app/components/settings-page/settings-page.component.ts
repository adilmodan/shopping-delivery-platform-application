import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service'
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;
  @ViewChild('displayUser', { static: true }) displayUser: ElementRef;
  @ViewChild('editUser', { static: true }) editUser: ElementRef;


  addressEmpty: boolean = false;
  paymentEmpty: boolean = false;
  user: User
  address: any = {}
  payment: any = {}
  id: number
  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.id = this.loginService.getCurrentUser().id
    this.userService.getUserDetails(this.id).subscribe((data: any) => {
      this.user = data
    })

  }

  editProfile() {
    this.editUser.nativeElement.classList.remove('hide');
    this.displayUser.nativeElement.classList.add('hide');
  }

  updateProfile() {
    this.userService.updateUserDetails(this.user, this.id).subscribe((data: any) => {
      this.user = data
    })
    this.alert.nativeElement.classList.remove('hide');
    this.editUser.nativeElement.classList.add('hide');
    this.displayUser.nativeElement.classList.remove('hide');

  }

  closeAlert() {
    this.alert.nativeElement.classList.add('hide');
  }

}
