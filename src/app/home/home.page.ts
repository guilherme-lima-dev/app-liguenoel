import {Component, Input} from '@angular/core';
import {Playlist, TrackService} from "../services/track.service";
import { Howl } from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input() playlist: Playlist;
  player: Howl = null;
  constructor(private track: TrackService) {}
  activeMessage: Playlist = null;
  start(message: Playlist) {
    this.player = new Howl  ({
      src: ['https://cors-anywhere.herokuapp.com/' + message.src]
    });
    this.player.play();
    console.log('é pra playar');
  }
  togglePlayer(pause){
  }
  getPlaylists(): Playlist[] {
    return this.track.getPlaylists();
  }
}
