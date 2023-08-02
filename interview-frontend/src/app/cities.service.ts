import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private apiUrl = 'http://localhost:3000/cities';

  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCity(cityName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cityName}`);
  }
}
