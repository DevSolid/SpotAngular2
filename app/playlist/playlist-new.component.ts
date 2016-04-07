import { Component, Output, EventEmitter} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Playlist } from '../model/playlist.model';
import { PlaylistService } from './playlist.service';

@Component({
    selector: 'playlist-new',
    templateUrl: 'app/playlist/playlist-new.html',
    directives: [CORE_DIRECTIVES],
    providers: [PlaylistService]
})

export class PlaylistNewComponent {
    public playlist: Playlist;

    @Output() onCreated = new EventEmitter<Playlist>();

    constructor(private _playlistService: PlaylistService) {
        this.playlist = new Playlist(null, null);
    }

    save () {

        this._playlistService.save(this.playlist);

        this.onCreated.emit(this.playlist);
    }
}
