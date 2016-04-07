import { Component } from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';

import { PlaylistNewComponent } from './playlist-new.component';
import { Playlist} from './../model/playlist.model';
import { Track} from './../model/track.model';

@Component({
    selector: 'playlist-list',
    templateUrl: 'app/playlist/playlist-list.html',
    directives: [CORE_DIRECTIVES, PlaylistNewComponent]
})
export class PlaylistListComponent {

    private list: Playlist[];

    constructor() {
        let list = [];

        for (let i = 0; i < 5; i++) {
            let playlist = new Playlist('p' + i, 'Playlist ' + i);

            list.push(playlist);
            for (let t = 0; t < 11; t++) {
                let track = new Track('t' + t, 'Track ' + t);
                playlist.trackList.push(track);
            }
        }
        this.list = list;
    }

    onCreatedNew(playlist: Playlist) {
        this.list.push(playlist);
    }

}
