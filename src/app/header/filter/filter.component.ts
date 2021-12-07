import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
  }

  searchForArtist(event: any) {
    const searchText = event.target.value;
    this.artistService.searchArtists(searchText);
  }

}
