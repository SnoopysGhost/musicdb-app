import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input() id: number | undefined;
  artist: Artist | undefined;

  constructor(private artistService: ArtistService, private router: Router) {}

  ngOnInit(): void {
    // just incase clear the active artist info;
    this.artistService.setActiveArtist(undefined);

    this.artistService.getArtist(this.id).subscribe((artist: Artist) => {
      this.artist = artist;
    });
  }

  async onArtistClick(): Promise<void> {
    if (this.artist) {
      this.artistService.setActiveArtist(this.artist);
      await this.router.navigateByUrl(`artist/${this.artist.id}`);
    }
  }
}
