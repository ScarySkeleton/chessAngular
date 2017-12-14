import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RegisterService {

  private _data = new Subject<any>();
  public data = this._data.asObservable();

  constructor() { }

  getData() {
    return this.data;
  }

  setData(data) {
    console.log(data);
    this._data.next(data);
  }

}
