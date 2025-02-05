import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss',
})
export class ArtistCardComponent {
  @Input() urlImg: string = '';
  @Input() name: string = '';
}
