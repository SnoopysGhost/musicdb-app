import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { Track } from '../models/track';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
})
export class ArtistDetailComponent implements OnInit {
  artist!: Artist;
  tracks: Track[] = [];
  albums: Album[] = [];
  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    const artistId = this.route.snapshot.params.id;
    this.artistService.getArtist(artistId).subscribe((artist: Artist) => {
      this.artist = artist;
    });
    this.artistService
      .getArtistTopTracks(artistId)
      .subscribe((tracks: Track[]) => {
        this.tracks = tracks;
      });
    this.artistService
      .getArtistAlbums(artistId)
      .subscribe((albums: Album[]) => {
        this.albums = albums;
      });
  }
}
