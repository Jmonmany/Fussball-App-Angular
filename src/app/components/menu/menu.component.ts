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
    return this.apiService.getCompetitions();
    // return this.apiService
    //   .getCompetitions()
    //   .subscribe((response) => console.log(response));
  }
  async ngOnInit() {
    this.competitions = await this.getMatches();
    console.log(this.competitions);
  }
  // async ngAfterViewInit() {
  //   this.competitions = await this.apiService.getCompetitions();
  // }
}
