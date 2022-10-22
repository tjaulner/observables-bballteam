import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlayerModel } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerpoolService {
  playerList: PlayerModel [] = [
    new PlayerModel('Frank', 'PG')
  ];

  subjectTest = new Subject<PlayerModel[]>();

  constructor() { }

  subjectSendFunction(name: string, position: string) {
    console.log('subjectSendfunction:', this.playerList);

    //this.playerList.push(new PlayerModel (name, position))
    this.subjectTest.next(this.playerList);
  }

  subjectReceivedFunction(): Observable<any> {
    return this.subjectTest.asObservable();
  }

}
