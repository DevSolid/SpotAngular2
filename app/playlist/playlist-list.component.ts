import { OnInit, Component } from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';

import { PlaylistService } from './playlist.service';
import { PlaylistNewComponent } from './playlist-new.component';
import { Playlist} from './../model/playlist.model';

@Component({
    selector: 'playlist-list',
    templateUrl: 'app/playlist/playlist-list.html',
    directives: [CORE_DIRECTIVES, PlaylistNewComponent],
    providers: [PlaylistService]
})
export class PlaylistListComponent implements OnInit {

    private list: Playlist[];

    constructor(private _playlistService: PlaylistService) {
        this.list = [];
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this._playlistService.getAll().then(list => this.list = list);
    }

    onCreatedNew(playlist: Playlist) {
        this.list.push(playlist);
    }

}
