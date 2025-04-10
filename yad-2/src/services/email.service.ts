import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendVerificationEmail(emailObj: object){
    return this.http.post(`${this.apiUrl}/EmailService/send-verification-email`, emailObj);
  }
  verifyCode(request: object){
    return this.http.post(`${this.apiUrl}/EmailService/verify-code`, request);
  }
}
