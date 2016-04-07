import { Injectable } from 'angular2/core';
import {Playlist} from '../model/playlist.model';

@Injectable()
export class PlaylistService {

    save(playlist: Playlist) {

        if (!playlist.id) {
            playlist.id = 'p' + Math.floor( Math.random() * 1000) + 1;
        }

        return playlist;
    }
}
