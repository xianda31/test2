import { Component } from '@angular/core';
import { FfbService } from '../ffb/services/ffb.service';
import { ffb_tournament } from '../ffb/interface/tournament.ffb.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss'
})
export class TournamentsComponent {
  tournaments!: ffb_tournament[];
  constructor(
    private ffbService: FfbService
  ) { }
  async ngOnInit(): Promise<void> {
    const today = new Date();
    this.tournaments = await this.ffbService.getTournaments();
    this.tournaments = this.tournaments.filter((tournament: ffb_tournament) => {
      return new Date(tournament.date) >= today;
    });
  }

}
