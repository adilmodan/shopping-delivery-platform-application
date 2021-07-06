import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;
  @ViewChild('displayAddress', { static: true }) displayAddress: ElementRef;
  @ViewChild('editAddress', { static: true }) editAddress: ElementRef;
  address: any = {}
  id: number
  addressEmpty: boolean = false;
  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.id = this.loginService.getCurrentUser().id
    this.userService.getAddress(this.id).subscribe({
      next: value => { this.address = value },
      error: err => { this.addressEmpty = true }
    })
  }

  edit() {
    this.editAddress.nativeElement.classList.remove('hide');
    this.displayAddress.nativeElement.classList.add('hide')
  }
  updateAddress() {
    console.log(this.addressEmpty)
    if (this.addressEmpty) {
      this.address.id = this.id
      this.userService.updateNewAddress(this.address).subscribe((data: any) => {
        this.address = data
      })
    }

    else {
      this.userService.updateExistingAddress(this.address, this.id).subscribe((data: any) => {
        this.address = data
      })
    }
    this.displayAddress.nativeElement.classList.remove('hide');
    this.editAddress.nativeElement.classList.add('hide');
    this.alert.nativeElement.classList.remove('hide');

  }

  closeAlert() {
    this.alert.nativeElement.classList.add('hide');
  }
}
