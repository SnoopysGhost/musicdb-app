import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() index: number | undefined;
  @Input() track: Track | undefined;
  trackDuration!: string;

  constructor() { }

  ngOnInit(): void {
    if (this.track?.duration) {
      const minutes = Math.floor(this.track.duration / 60);
      const remainingSeconds = String(this.track.duration - (minutes * 60));
      if (remainingSeconds.length === 1) {
       this.trackDuration = `${minutes}:0${remainingSeconds}`;
      } else {
        this.trackDuration = `${minutes}:${remainingSeconds}`;
      }
    }
  }

}
