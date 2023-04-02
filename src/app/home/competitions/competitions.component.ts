import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/components/menu/interfaces/competition.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss'],
})
export class CompetitionsComponent implements OnInit {
  competitions!: Competition[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.competitions = this.getMatches().competitions;
  }
}
