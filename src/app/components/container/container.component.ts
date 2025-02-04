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
  ];

  ngOnInit() {}
}
