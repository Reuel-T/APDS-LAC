import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private token: string

  getToken()
  {
    return this.token;
  }

  login(email: string, password: string, username:string)
  {
    const authData: AuthData = {
                                  email: email, 
                                  password:password, 
                                  username:username
                                };
    this.http.post<{token : string}>('https://localhost:3000/api/user/login',authData)
      .subscribe(response => 
        {
          const token = response.token;
          this.token = token;
          console.log(response);
        }) 

    console.log('login method');
  }
  
  createUser(email:string, password:string, username:string)
  {
    const authData: AuthData =  {
                                  email: email,
                                  username: username,
                                  password: password
                                }
    
    this.http.post('https://localhost:3000/api/user/signup',authData)
      .subscribe(response => 
        {
          console.log(response);
        })

    console.log('create user method');
  }

}
