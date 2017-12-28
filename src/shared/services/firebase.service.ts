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

    setData(entity: string, value: object, fbAction: IFireBaseAction): Observable<any> {

        this.store.dispatch(globalAction.isFetching());
        this.store.dispatch(globalAction.isnotFetching());

        return Observable.throw(new Error("ERROR")).delay(500);

        // return Observable.of(
        //     this.db
        //     .list(DATA[entity])
        //     .push(value));
    }

    getData(entity: string): Observable<any>  {
        this.store.dispatch(globalAction.isFetching());
        let data = this.db
            .object(DATA)
            .valueChanges()
            .map(data => this.toArray(data[entity]))
            .do(() => this.store.dispatch(globalAction.isnotFetching()));

        return data;
      }

    toArray(obj) {
        let array = [],
            key;

      for(key in obj) {
        if(obj.hasOwnProperty(key)) {
            array.push(obj[key]);
        }
      }

      return array;
    }
}
