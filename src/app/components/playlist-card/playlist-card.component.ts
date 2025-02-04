import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.scss',
})
export class PlaylistCardComponent {
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() backgroundColor: string = '';
}
