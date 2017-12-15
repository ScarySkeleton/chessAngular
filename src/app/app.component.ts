import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'RxJS';

import {GlobalService} from 'global/global.service';
import {IGlobalState} from 'global/global.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public globalState: Rx.Subscription = this._globalService
    .globalState$
    .subscribe((state: IGlobalState) => this.globalStateChange(state));

  constructor(private store: Store<IGlobalState>,
    private _globalService: GlobalService) {}

  globalStateChange(glState) {
    console.log(glState);
  }
}
