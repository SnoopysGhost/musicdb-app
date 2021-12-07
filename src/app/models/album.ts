export class Album {
    id?: number;
    title?: string;
    cover?: string;
    releaseDate?: string;

    constructor(id: number, title: string, cover: string, releaseDate: string) {
        this.id = id;
        this.title = title;
        this.cover = cover;
        this.releaseDate = releaseDate;
    }
}
