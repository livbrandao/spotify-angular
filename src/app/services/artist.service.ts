import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../interfaces/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private apiUrl = 'http://localhost:3000/artists';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }
}
