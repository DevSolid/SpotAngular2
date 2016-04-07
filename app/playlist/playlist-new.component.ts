import { Component, Output, EventEmitter} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Playlist } from '../model/playlist.model';

@Component({
    selector: 'playlist-new',
    templateUrl: 'app/playlist/playlist-new.html',
    directives: [CORE_DIRECTIVES]
})

export class PlaylistNewComponent {
    public playlist: Playlist;

    @Output() onCreated = new EventEmitter<Playlist>();

    constructor() {
        this.playlist = new Playlist(null, null);
    }

    save () {
        console.log('opslaan');
        this.onCreated.emit(this.playlist);
    }
}
