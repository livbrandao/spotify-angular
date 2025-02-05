import { Component, EventEmitter, Output } from '@angular/core';
import { Artist } from '../../interfaces/artist.interface';
import { ArtistsService } from '../../services/artist.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearchChange(): void {
    this.searchEvent.emit(this.searchTerm);
  }
}
