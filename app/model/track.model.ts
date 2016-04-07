import {Artist} from './artist.model';
import {Album} from './album.model';
export class Track {

    public id: string;
    public name: string;
    public album: Album;
    public artistList: Artist[];

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
