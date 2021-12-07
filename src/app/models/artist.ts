export class Artist {
    id?: number;
    name?: string;
    picture?: string;
    numberOfFans?: number;
    numberOfAlbums?: number;

    constructor(id: number, name: string, picture: string, numberOfFans: number, numberOfAlbums: number) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.numberOfFans = numberOfFans;
        this.numberOfAlbums = numberOfAlbums;
    }
}
