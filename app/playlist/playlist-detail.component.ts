import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Playlist} from '../model/playlist.model';
import { SessionService } from '../common/session.service';
import {UserData} from '../model/userData.model';

@Component({
    selector: 'playlist-detail',
    templateUrl: 'app/playlist/playlist-detail.html',
    directives: [CORE_DIRECTIVES]
})

export class PlaylistDetailComponent implements OnInit {

    public playlist: Playlist;

    private userData: UserData;

    constructor(private _sessionService: SessionService) {
    }

    ngOnInit() {
        this.userData = this._sessionService.getUserData();
        // HACK: just get one
        this.playlist = this.userData.playlistList[0];
    }
}
