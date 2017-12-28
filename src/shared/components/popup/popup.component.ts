import {Component, ViewChild, ComponentFactoryResolver, OnInit, AfterViewChecked, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'RxJS';

import {AnchorDirective} from 'shared/directives/AnchorDirective';
import {IAppState} from 'shared/interfaces/IAppState';
import {IPopupState} from 'shared/interfaces/IPopupState';
import {isnotShowPopup} from './popup.action';

@Component({
  selector: 'chess-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild(AnchorDirective) anchor: AnchorDirective;

  public isShow: boolean;
  public title: string;
  public childComponent: any;
  
  public popup$: Rx.Subscription = this.store
    .subscribe(({popup}: {popup: IPopupState}): void => {
      this.isShow = popup.isShow;
      this.title = popup.title;
      this.childComponent = popup.childComponent;

      if(this.childComponent) {
        this.ngAfterViewChecked();
      }
    });

  constructor(private store: Store<IAppState>,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  public ngOnInit(): void {
    if(this.childComponent) {
      this.renderChild();
    }
  }

  public ngAfterViewChecked(): void {
    this.renderChild();
  }

  public ngOnDestroy(): void {
    this.popup$.unsubscribe();
  }

  public renderChild(): void {
    // If can't find anchor - return
    if(!this.anchor) {
      return;
    }

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.childComponent);
    let viewContainerRef = this.anchor.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    // Intance will using for, for example, Input() el
    //<CompType>componentRef.instance.data = 
  }

  public onClose(): void {
    this.store.dispatch(new isnotShowPopup());
  }
}
