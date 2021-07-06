import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }


  passwordsMatch(password = '', confirmPassword = '') {
    return password === confirmPassword
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')

    if (password.value === confirmPassword.value) {
      confirmPassword.setErrors(null)
    } else {
      confirmPassword.setErrors({ passwordsMatch: true })
    }
    return null
  }
}
