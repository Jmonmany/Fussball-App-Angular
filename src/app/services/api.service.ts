import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from '../components/menu/interfaces/competition.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  competition: Competition | undefined;
  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': '9142d96e1c3d45368297e9722c0c6ac6',
    }),
  };
  constructor(private http: HttpClient) {}
  getCompetitions() {
    return this.http.get<Competition>(
      'https://api.football-data.org/v4/competitions/',
      this.httpOptions
    );
  }
}
