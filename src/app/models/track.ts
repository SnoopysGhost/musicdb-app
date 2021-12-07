export class Track {
  id?: number;
  title?: string;
  duration?: number;

  constructor(id: number, title: string, duration: number) {
    this.id = id;
    this.title = title;
    this.duration = duration;
  }
}
