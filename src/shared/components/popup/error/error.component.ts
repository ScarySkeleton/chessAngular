import {Component, Input} from '@angular/core';

@Component({
  selector: 'chess-popup-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  @Input()
  public message: string = '';
  @Input()
  public solution: string = '';

  constructor() { }
}
