import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from "../services/track.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  @Input() playlist: Playlist;
  constructor() { }

  ngOnInit() {}

}
