import { Injectable } from 'angular2/core';
import {Playlist} from '../model/playlist.model';
import {Track} from '../model/track.model';

@Injectable()
export class PlaylistService {

    save(playlist: Playlist) {

        if (!playlist.id) {
            playlist.id = 'p' + Math.floor( Math.random() * 1000) + 1;
        }

        return playlist;
    }

    getAll() {

        let mockList = [];
        for (let i = 0; i < 5; i++) {
            let playlist = new Playlist('p' + i, 'Playlist ' + i);

            mockList.push(playlist);
            for (let t = 0; t < 11; t++) {
                let track = new Track('t' + t, 'Track ' + t);
                playlist.trackList.push(track);
            }
        }

        return Promise.resolve(mockList);
    }
}
