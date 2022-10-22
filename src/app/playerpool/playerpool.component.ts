import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { PlayerModel } from '../models/player.model';
import { NewplayerComponent } from '../newplayer/newplayer.component';
import { PlayerpoolService } from './playerpool.service';

@Component({
  selector: 'app-playerpool',
  templateUrl: './playerpool.component.html',
  styleUrls: ['./playerpool.component.css'],
  providers: [PlayerpoolService, NewplayerComponent]
})
export class PlayerpoolComponent implements OnInit {
  playerRoster: PlayerModel []= [];

  private playerSub: Subscription;

  constructor(private playerService: PlayerpoolService) { }

  ngOnInit(): void {
    this.playerSub = this.playerService.subjectReceivedFunction().subscribe((data) => {
      console.log('PlayerPoolComponent:', this.playerRoster)
      this.playerRoster = data;
    });
    this.playerSub = this.playerService.subjectTest.subscribe((data) => {
      console.log('testing:', data)
      this.playerRoster=data;
    })
    console.log('ngOnIit:', this.playerRoster)
  }


}
