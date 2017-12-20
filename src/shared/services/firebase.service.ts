import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs';

import {DATA} from 'assets/dbschema';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class FireBaseService {

    //public readonly data$: Observable<AngularFireDatabase>;

    constructor(
        private db: AngularFireDatabase
    ) {}

    setData(entity: string, value: object): any {
        return this.db
            .object(DATA)
            .set(value)
            .then(() => true)
            .catch((error) => {
                console.log("error adding data to firebase db", error);
                return false;
            })
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
