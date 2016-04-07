import { Injectable } from 'angular2/core';
import { UserData } from '../model/userData.model';

@Injectable()
export class SessionService {

    getUserData(): UserData {
        let userData = this.getItem<UserData>('userData');
        return userData || new UserData();
    }

    setUserData(userData: UserData) {
        this.setItem('userData', userData);
    }

    private setItem(key: string, item: any) {
        localStorage.setItem('spotangular2.' + key, JSON.stringify(item));
    }

    private getItem<T>(key: string) {
        return <T>JSON.parse(localStorage.getItem('spotangular2.' + key));
    }
}
