import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService) { }

  usernameError = 'Username is shit'
  passwordError = 'Password is shit'
  emailError = 'Email is shit'

  ngOnInit(): void {
  }

  onLogin(form: NgForm)
  {
    if(form.invalid)
    {
      return;
    }

    this.authService.login(form.value.enteredEmail, form.value.enteredPassword, form.value.entredUsername)
    console.log(form.value);
  }

}
