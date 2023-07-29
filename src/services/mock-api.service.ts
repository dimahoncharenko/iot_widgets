import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockAPIService {
  private baseUrl = "https://iot-mock-api.onrender.com/api/v1/params"

  constructor(private http: HttpClient) { }

  changeTemperature(temp: number) {
    return this.http.post(`${this.baseUrl}/temperature/adjust`, {
      temp
    });
  }
}
