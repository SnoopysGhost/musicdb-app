import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { Track } from 'src/app/models/track';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  artists = new Subject<Artist[]>();
  private isSearching = false;
  private activeArtist: Artist | undefined;

  constructor(private httpService: HttpService) {}

  getArtistTopTracks(artistId: number | undefined) {
    return this.httpService.get(`artist/${artistId}/top?limit=5`).pipe(
      map((responseData: any) => {
        const tracks = responseData.data.map((track: any) => {
          return new Track(track.id, track.title, track.duration);
        });
        return tracks;
      })
    );
  }

  getArtistAlbums(artistId: number | undefined) {
    return this.httpService.get(`artist/${artistId}/albums`).pipe(
      map((responseData: any) => {
        const albums = responseData.data.map((album: any) => {
          return new Album(album.id, album.title, album.cover, album.release_date);
        });
        return albums;
      })
    );
  }

  getArtist(artistId: number | undefined) {
    return this.httpService.get(`artist/${artistId}`).pipe(
      map((artist: any) => {
        return new Artist(
          artist.id,
          artist.name,
          artist.picture,
          artist.nb_fan,
          artist.nb_album
        );
      })
    );
  }

  getTopArtists() {
    // return top artists for default list
    if (!this.isSearching) {
      return this.httpService.get('chart').subscribe((topCharts: any) => {
        this.artists.next(topCharts.artists.data);
      });
    }
    return;
  }

  searchArtists(searchText: string) {
    if (!searchText) {
      return this.getTopArtists();
    }
    this.isSearching = true;
    return this.httpService.get(`search/artist?q=${searchText}`).subscribe((artists: any) => {
      this.isSearching = false;
      this.artists.next(artists.data);
    });
  }

  setActiveArtist(artist: Artist | undefined): void {
    this.activeArtist = artist;
  }

  getActiveArtist(): Artist | undefined {
    return this.activeArtist;
  }
}
