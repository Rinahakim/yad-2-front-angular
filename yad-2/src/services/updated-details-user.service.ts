import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdatedDetailsUserModel } from '../models/updatedDetailsUserModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatedDetailsUserService {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  updateDetailsUser(updatedDetailsUserModel : UpdatedDetailsUserModel):Observable<UpdatedDetailsUserModel>
  {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.message}`
    });
    return this.http.post<UpdatedDetailsUserModel>(`${this.apiUrl}/UpdateDetailsUser`, 
      updatedDetailsUserModel, {headers});
  }
}
