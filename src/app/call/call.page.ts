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
  playerTelefone: Howl = null;
  playlist: Playlist;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.playlist = nav.extras.state.playlist;
  }
  cancelar(){
      this.player.stop();
      this.playerTelefone.stop();
      this.router.navigateByUrl('/home');
  }

  ngOnInit() {
    this.playerTelefone = new Howl  ({
        src: ['https://cors-anywhere.herokuapp.com/http://paroquiasaogabriel.com.br/wp-content/uploads/2020/09/som-telefone.mp3']
    });
    this.player = new Howl  ({
        src: ['https://cors-anywhere.herokuapp.com/' + this.playlist.src]
    });
    this.playerTelefone.play();
    setTimeout(()=>{
        this.playerTelefone.stop();
        this.player.play();
    }, 15000);
  }

}
