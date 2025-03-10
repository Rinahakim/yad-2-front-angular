import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../environment/environment';
import { LoginModel } from '../models/loginModel';
import { SignupModel } from '../models/signupModel';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  signup(signupModel: SignupModel){
    return this.http.post(`${this.apiUrl}/Authentication/signup`, signupModel);
  }
  login(loginModel: LoginModel){
    return this.http.post(`${this.apiUrl}/Authentication/login`, loginModel);
  }

  isLoggedIn(){
    return !!localStorage?.getItem('token');
  }
}
