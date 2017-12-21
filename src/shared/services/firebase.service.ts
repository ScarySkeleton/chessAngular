import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {IAppState} from 'shared/interfaces/IAppState';
import {IFireBaseAction} from 'shared/interfaces/IFireBaseAction';
import * as globalAction from 'app/global/global.action';
import {DATA} from 'assets/dbschema';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class FireBaseService {

    constructor(
        private db: AngularFireDatabase,
        private store: Store<IAppState>
    ) {}

    setData(entity: string, value: object, fbAction: IFireBaseAction): any {
        console.log("firebase set data");
        //this.store.dispatch(action);
        console.log("firebase set", this.db.list(DATA), this.db.list(DATA[entity]));

        return this.db
            .list(DATA)
            .push(value)
            .then(() => console.log("data pushed"))
    }

    getData(entity: string): Observable<any>  {
        return this.db
          .object(DATA)
          .valueChanges()
          .map(data => data[entity]);
        //   .subscribe(data => {
        //     console.log(data[entity]);
        //     return data
        //   });
      }
}
