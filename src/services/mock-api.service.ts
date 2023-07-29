import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MockAPIService {
  private baseUrl = "http://localhost:3000/api/v1/params"

  constructor(private http: HttpClient) { }

  changeTemperature(temp: number) {
    return this.http.post(`${this.baseUrl}/temperature/adjust`, {
      temp
    });
  }
}
