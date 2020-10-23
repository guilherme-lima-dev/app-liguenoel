import { Injectable } from '@angular/core';

export interface Playlist {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  public playlists: Playlist[] = [
    {
      fromName: 'Historia 1',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false,
      src: 'http://api.elpilar.com.br/01.mp3'
    },
    {
      fromName: 'Historia 2',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false,
      src: 'http://api.elpilar.com.br/02.mp3'
    },
    {
      fromName: 'Historia 3',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false,
      src: 'http://api.elpilar.com.br/03.mp3'
    },
    {
      fromName: 'Historia 4',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false,
      src: 'http://api.elpilar.com.br/04.mp3'
    },
    {
      fromName: 'Historia 5',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false,
      src: 'http://api.elpilar.com.br/05.mp3'
    },
    {
      fromName: 'Historia 6',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false,
      src: 'http://api.elpilar.com.br/06.mp3'
    },
    {
      fromName: 'Historia 7',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false,
      src: 'http://api.elpilar.com.br/07.mp3'
    },
    {
      fromName: 'Historia 8',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false,
      src: 'http://api.elpilar.com.br/08.mp3'
    },
    {
      fromName: 'Historia 9',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 8,
      read: false,
      src: 'http://api.elpilar.com.br/09.mp3'
    },
    {
      fromName: 'Historia 10',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 9,
      read: false,
      src: 'http://api.elpilar.com.br/10.mp3'
    },
    {
      fromName: 'Historia 11',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 10,
      read: false,
      src: 'http://api.elpilar.com.br/11.mp3'
    },
    {
      fromName: 'Historia 12',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 11,
      read: false,
      src: 'http://api.elpilar.com.br/12.mp3'
    },
  ];

  constructor() { }

  public getPlaylists(): Playlist[] {
    return this.playlists;
  }

  public getPlaylistById(id: number): Playlist {
    return this.playlists[id];
  }
}
