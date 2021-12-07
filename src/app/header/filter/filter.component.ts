import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private artistService: ArtistService, private router: Router) { }

  ngOnInit(): void {
  }

  searchForArtist(event: any): void {
    const searchText = event.target.value;
    this.artistService.searchArtists(searchText);
    this.router.navigateByUrl('artists');
  }

}
