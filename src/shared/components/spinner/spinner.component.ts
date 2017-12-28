import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';

import {GlobalService} from 'shared/services/global.service';
import {IGlobalState} from 'shared/interfaces/IGlobalState';

@Component({
  selector: 'chess-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  private spinner$: Rx.Subscription = this.globalService
    .globalState$
    .subscribe(({global}: {global: IGlobalState}) => {
      if(global) {
        this.isShowSpinner = global.isFetching;
      }
    });

  private isShowSpinner: boolean = false;

  constructor(private globalService: GlobalService) { }

}
