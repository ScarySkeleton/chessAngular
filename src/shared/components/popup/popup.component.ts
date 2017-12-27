import {Component, Input} from '@angular/core';

@Component({
  selector: 'chess-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Input()
  public isShow: boolean = false;

  @Input()
  public title: string = "Info message";

  @Input()
  public childComponent: Component;

  constructor() { }

  onClose() {
    this.isShow = false;
  }
}
