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

  constructor() { }

  ngOnInit(): void {
  }

}
