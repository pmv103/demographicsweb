import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getCurrentWeather(city: string) {
    return this.httpClient.get('http://localhost:8080/currentWeather/' + city);
  }
}
