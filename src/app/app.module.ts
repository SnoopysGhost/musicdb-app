import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './header/filter/filter.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { TrackListComponent } from './artist-detail/track-list/track-list.component';
import { AlbumListComponent } from './artist-detail/album-list/album-list.component';
import { TrackComponent } from './artist-detail/track-list/track/track.component';
import { AlbumComponent } from './artist-detail/album-list/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    HeaderComponent,
    FilterComponent,
    ArtistComponent,
    ArtistDetailComponent,
    TrackListComponent,
    AlbumListComponent,
    TrackComponent,
    AlbumComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
