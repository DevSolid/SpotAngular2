import { Track } from './track.model';

export class Playlist {

    public id: string;
    public name: string;

    public trackList: Track[];

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.trackList = [];
    }
}
