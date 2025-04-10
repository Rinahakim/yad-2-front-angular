import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  private apiUrl = environment.apiUrl;
  private userSubject = new BehaviorSubject<UserModel | null>(null);
  user$ = this.userSubject.asObservable();
  
  constructor(private http: HttpClient) {}

  getUserInformation():Observable<UserModel>{
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.message}`
    });
    return this.http.get<UserModel>(`${this.apiUrl}/UserInformation`, { headers })
    .pipe(tap((user: UserModel) => this.userSubject.next(user)));
  }
  updateUserInfoLocally(updatedUser: UserModel) {
    this.userSubject.next(updatedUser); 
  }
}
