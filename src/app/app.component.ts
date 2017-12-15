import { Component } from '@angular/core';
import {Store} from '@ngrx/store';

import {IGlobalState} from 'shared/globalState/globalState.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<IGlobalState>) {}
}
