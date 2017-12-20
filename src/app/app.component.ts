import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'RxJS';

import {GlobalService} from 'global/global.service';
import {IGlobalState} from 'interfaces/IGlobalState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isSpinnerActive: boolean = false;

  public globalState: Rx.Subscription = this._globalService
    .globalState$
    .subscribe((state: IGlobalState) => this.globalStateChange(state));

  constructor(private store: Store<IGlobalState>,
    private _globalService: GlobalService) {}

  globalStateChange(glState) {
    if(!glState.global) {
      return;
    }

    this.setSpinner(glState.global);
  }

  setSpinner({isFetching}: IGlobalState) {
    this.isSpinnerActive = isFetching;
  }
}
