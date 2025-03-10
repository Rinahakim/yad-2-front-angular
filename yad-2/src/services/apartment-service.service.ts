import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllApartment(): Observable<Apartment[]>{
    return this.http.get<Apartment[]>(`${this.apiUrl}/Apartment`);
  } 
}
