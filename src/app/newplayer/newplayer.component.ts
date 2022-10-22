import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PlayerModel } from '../models/player.model';

import { PlayerpoolService } from '../playerpool/playerpool.service';

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.css'],
  providers: [PlayerpoolService]
})
export class NewplayerComponent implements OnInit {
  // -- Part of Register Player
  signupForm: FormGroup;
  player = {
    name: '',
    position: '',
  };
  submitted = false; // for the form reset

  constructor(private playerService: PlayerpoolService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'position': new FormControl('PG', Validators.required)
    });
  }

  // -- Part of Register Player Button
  onPlayerRegistration() {
    this.submitted = true;

    // Gather Input Values & Push Object (player) to Player List Array
    this.player.name = this.signupForm.value.name;
    this.player.position = this.signupForm.value.position;
    //this.playerService.playerList.push({name: this.player.name, position: this.player.position});

    //console.log(this.playerService.playerList);

    // Send Subject to Player Pool Component?
    this.playerService.subjectSendFunction(this.player.name, this.player.position)



    this.signupForm.reset();
  }

}
