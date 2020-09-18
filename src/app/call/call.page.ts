import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import {Playlist} from "../services/track.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {
  player: Howl = null;
  playlist: Playlist;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.playlist = nav.extras.state.playlist;
  }
  cancelar(){
      this.player.stop();
      this.router.navigateByUrl('/home');
  }

  ngOnInit() {
        this.player = new Howl  ({
          src: ['https://cors-anywhere.herokuapp.com/' + this.playlist.src]
        });
        this.player.play();
  }

}
