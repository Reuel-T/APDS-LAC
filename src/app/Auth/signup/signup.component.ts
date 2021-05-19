import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' 
import { AuthService } from '../auth.service';

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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignup(form : NgForm)
  {
    if(form.invalid)
    {
      return
    }
    
    console.log(form.value);
    this.authService.createUser(form.value.enteredEmail, form.value.enteredPassword, form.value.enteredUsername);
  }

}
