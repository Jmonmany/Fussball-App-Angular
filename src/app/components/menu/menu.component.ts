import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Competition } from './interfaces/competition.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  showDropdown = false;
  loading: boolean;
  competitions!: Competition[];
  error!: Error;
  constructor(private apiService: ApiService) {
    this.loading = false;
  }
  getMatches() {
    // return this.apiService
    //   .getCompetitions()
    //   .subscribe((response) => console.log(response));
  }
  ngOnInit(): void {
    // this.competitions = this.getMatches().competitions;
  }
}
