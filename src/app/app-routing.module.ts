import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'artists',
  },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artist/:id', component: ArtistDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
