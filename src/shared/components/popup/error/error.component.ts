import {IDynamicPopupComponent} from 'shared/interfaces/IDynamicPopupComponent';
import {IAppState} from 'shared/interfaces/IAppState';
import {IPopupState} from 'shared/interfaces/IPopupState';

import {Component, Input, SimpleChanges} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'chess-popup-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends IDynamicPopupComponent {

  constructor(store: Store<IAppState>) {
    super(store);
  }
}
