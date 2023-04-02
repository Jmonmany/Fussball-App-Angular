import { Component, OnInit } from '@angular/core';
import { Competition } from '../components/menu/interfaces/competition.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  template: ` <app-competitions></app-competitions> `,
  styles: [],
})
export class HomeComponent implements OnInit {
  competitions: Competition[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.competitions = this.getMatches().competitions;
  }
}
