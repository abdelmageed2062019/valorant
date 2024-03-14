import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl: string = 'https://valorant-api.com/v1';

  constructor(private _HttpClient: HttpClient) {
  }

  FetchAllAgents(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/agents`)
  }

  FetchAgent(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/agents/${id}`)
  }

  FetchAllMaps(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/maps`)
  }

  FetchAllGears(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/gear`)
  }


  FetchAllWeapons(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/weapons`)
  }

}
