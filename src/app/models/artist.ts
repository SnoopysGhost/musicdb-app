export class Artist {
    id?: number;
    name?: string;
    picture?: string;
    numberOfFans?: string;
    numberOfAlbums?: number;

    constructor(id: number, name: string, picture: string, numberOfFans: number, numberOfAlbums: number) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.numberOfFans = numberOfFans > 10000 ? `${Math.floor(numberOfFans / 1000)}k` : String(numberOfFans);
        this.numberOfAlbums = numberOfAlbums;
    }
}
