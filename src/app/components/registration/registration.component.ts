import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormValidatorService } from 'src/app/services/form-validator.service'
import { Router } from '@angular/router';
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder,
    private formValidator: FormValidatorService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      phonenumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")])],
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]

    })
  }

  handleSubmit() {
    let user: User = new User(this.registerForm.get('phonenumber').value, this.registerForm.get('name').value, this.registerForm.get('email').value, this.registerForm.get('password').value)
    this.userService.postUser(user).subscribe(data => {
      alert('Registration successful!');
      this.router.navigate(['/login']);
    },
      error => {
        alert('Registration failed.');
      });
  }
}
