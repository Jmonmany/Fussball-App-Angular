import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from '../components/menu/interfaces/competition.interface';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  competition: Competition | undefined;
  constructor(private http: HttpClient) {}
  // getCompetitions() {
  //   return this.http.get<Competition>('http://localhost:3001');
  // }
  async getCompetitions() {
    const response = await fetch('http://localhost:3001');
    return response.json();
  }
}
