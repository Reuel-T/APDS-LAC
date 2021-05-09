import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  entredUsernameError = 'Shit Username';
  entredPasswordError = 'Shit Password';
  entredOrderError = 'Shit Order';
  entredEmailError = 'Shit Email';
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSignup(form : NgForm)
  {
    console.log(form.value);
  }

}
