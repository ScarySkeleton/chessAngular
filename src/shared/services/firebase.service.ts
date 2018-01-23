import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {IAppState} from 'shared/interfaces/IAppState';
import {IFireBaseAction} from 'shared/interfaces/IFireBaseAction';
import * as globalAction from 'shared/store/global.action';
import {DATA} from 'assets/dbschema';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class FireBaseService {

    constructor(
        private db: AngularFireDatabase,
        private store: Store<IAppState>
    ) {}

    public setData = (entity: string, value: object): any =>
        this.db
            .list(`${DATA}/${entity}`)
            .push(value);

    public getData = (entity: string): Observable<any> => 
        this.db
            .object(DATA)
            .valueChanges()
            .map(data => data[entity]);

}
