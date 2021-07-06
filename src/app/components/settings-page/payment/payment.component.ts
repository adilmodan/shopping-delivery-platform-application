import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;
  @ViewChild('editPayment', { static: true }) editPayment: ElementRef;
  @ViewChild('displayPayment', { static: true }) displayPayment: ElementRef;
  paymentEmpty: boolean = false;
  id: number
  payment: any = {}
  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.id = this.loginService.getCurrentUser().id
    this.userService.getPayment(this.id).subscribe({
      next: value => { this.payment = value },
      error: err => { this.paymentEmpty = true }
    })
  }

  edit() {
    this.editPayment.nativeElement.classList.remove('hide');
    this.displayPayment.nativeElement.classList.add('hide')
  }
  updatePayment() {
    if (this.paymentEmpty) {
      this.payment.id = this.id
      console.log(this.payment)
      this.userService.updateNewPayment(this.payment).subscribe((data: any) => {
        this.payment = data
      })
    }
    else {
      this.userService.updateExistingPayment(this.payment, this.id).subscribe((data: any) => {
        this.payment = data
      })
    }
    this.alert.nativeElement.classList.remove('hide');
    this.displayPayment.nativeElement.classList.remove('hide');
    this.editPayment.nativeElement.classList.add('hide')
  }

  closeAlert() {
    this.alert.nativeElement.classList.add('hide');
  }

}
