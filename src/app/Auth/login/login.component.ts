import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  usernameError = 'Username is shit'
  passwordError = 'Password is shit'
  emailError = 'Email is shit'

  ngOnInit(): void {
  }

}
