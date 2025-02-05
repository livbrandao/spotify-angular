import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import { PlaylistCardComponent } from '../playlist-card/playlist-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [PlaylistCardComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnInit {
  cards: Card[] = [
    {
      imageUrl: 'assets/playlist/1.jpeg',
      imageAlt: 'boas festas',
      title: 'Boas festas',
      link: '',
      backgroundColor: 'rgb(0, 100, 80)',
    },
    {
      imageUrl: 'assets/playlist/2.png',
      imageAlt: 'feitos para você',
      title: 'Feitos para você',
      link: '',
      backgroundColor: 'rgb(132, 0, 231)',
    },
    {
      imageUrl: 'assets/playlist/3.jpeg',
      imageAlt: 'Lançamentos',
      title: 'Lançamentos',
      link: '',
      backgroundColor: 'rgb(30, 50, 100)',
    },
    {
      imageUrl: 'assets/playlist/4.jpeg',
      imageAlt: 'Creators',
      title: 'Creators',
      link: '',
      backgroundColor: 'rgb(140, 25, 50)',
    },
    {
      imageUrl: 'assets/playlist/5.jpeg',
      imageAlt: 'Para treinar',
      title: 'Para treinar',
      link: '',
      backgroundColor: 'rgb(232, 17, 91)',
    },
    {
      imageUrl: 'assets/playlist/6.jpeg',
      imageAlt: 'Podcasts',
      title: 'Podcasts',
      link: '',
      backgroundColor: 'rgb(83, 122, 161)',
    },
    {
      imageUrl: 'assets/playlist/7.jpeg',
      imageAlt: 'Sertanejo',
      title: 'Sertanejo',
      link: '',
      backgroundColor: 'rgb(142, 102, 172)',
    },
    {
      imageUrl: 'assets/playlist/8.jpeg',
      imageAlt: 'Samba e pagode',
      title: 'Samba e pagode',
      link: '',
      backgroundColor: 'rgb(20, 138, 8)',
    },
    {
      imageUrl: 'assets/playlist/9.jpeg',
      imageAlt: 'Funk',
      title: 'Funk',
      link: '',
      backgroundColor: 'rgb(30, 50, 100)',
    },
    {
      imageUrl: 'assets/playlist/10.jpeg',
      imageAlt: 'MPB',
      title: 'MPB',
      link: '',
      backgroundColor: 'rgb(233, 20, 41)',
    },
    {
      imageUrl: 'assets/playlist/11.jpeg',
      imageAlt: 'Rock',
      title: 'Rock',
      link: '',
      backgroundColor: 'rgb(80, 55, 80)',
    },
    {
      imageUrl: 'assets/playlist/12.jpeg',
      imageAlt: 'Hip Hop',
      title: 'Hip Hop',
      link: '',
      backgroundColor: 'rgb(216, 64, 0)',
    },
    {
      imageUrl: 'assets/playlist/13.jpeg',
      imageAlt: 'Indie',
      title: 'Indie',
      link: '',
      backgroundColor: 'rgb(186, 93, 7)',
    },
    {
      imageUrl: 'assets/playlist/14.jpeg',
      imageAlt: 'Relax',
      title: 'Relax',
      link: '',
      backgroundColor: 'rgb(0, 30, 80)',
    },
    {
      imageUrl: 'assets/playlist/15.jpeg',
      imageAlt: 'Música Latina',
      title: 'Música Latina',
      link: '',
      backgroundColor: 'rgb(60, 30, 80)',
    },
  ];

  ngOnInit() {}
}
