import {Component, Input} from '@angular/core';
import {Playlist, TrackService} from "../services/track.service";
import { Howl } from 'howler';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input() playlist: Playlist;
  // player: Howl = null;
  constructor(private track: TrackService, private router: Router) {}

  // activeMessage: Playlist = null;
  // start(message: Playlist) {
  //   this.player = new Howl  ({
  //     src: ['https://cors-anywhere.herokuapp.com/' + message.src]
  //   });
  //   this.player.play();
  //   console.log('é pra playar');
  // }
  // togglePlayer(pause){
  // }
  navigateByCall(playlist: Playlist){
    this.router.navigateByUrl('/call', {
      state: { playlist: playlist }
    })
  }
  getPlaylists(): Playlist[] {
    return this.track.getPlaylists();
  }
}
