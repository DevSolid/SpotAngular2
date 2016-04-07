import { OnInit, Component } from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';

import { PlaylistService } from './playlist.service';
import { PlaylistNewComponent } from './playlist-new.component';
import { Playlist} from './../model/playlist.model';
import { SessionService } from '../common/session.service';
import {UserData} from '../model/userData.model';

@Component({
    selector: 'playlist-list',
    templateUrl: 'app/playlist/playlist-list.html',
    directives: [CORE_DIRECTIVES, PlaylistNewComponent]
})
export class PlaylistListComponent implements OnInit {

    private userData: UserData;
    private list: Playlist[];

    constructor(private _playlistService: PlaylistService,
                private _sessionService: SessionService) {
        this.list = [];
    }

    ngOnInit() {
        this.userData = this._sessionService.getUserData();
        this.list = this.userData.playlistList;
    }

    onCreatedNew(playlist: Playlist) {
        this.list.push(playlist);
    }

    save() {
        this.userData.playlistList = this.list;
        this._sessionService.setUserData(this.userData);
    }

    load() {
        this.userData = this._sessionService.getUserData();
        this.list = this.userData.playlistList;
    }

}
