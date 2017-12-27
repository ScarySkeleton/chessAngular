import {Component, ViewChild, ComponentFactoryResolver, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
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
export class PopupComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(AnchorDirective) anchor: AnchorDirective;

  public isShow: boolean;
  public title: string;
  public childComponent: any;
  
  public popup$: Rx.Subscription = this.store
    .subscribe(({popup}: {popup: IPopupState}): void => {
      console.log(popup);
      this.isShow = popup.isShow;
      this.title = popup.title;
      this.childComponent = popup.childComponent;

      if(this.childComponent) {
        //this.renderChild();
        this.ngAfterViewInit();
      }
    });

  constructor(private store: Store<IAppState>,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  public ngOnInit(): void {
    console.log("popup init"); 
    if(this.childComponent) {
      this.renderChild();
    }
  }

  public ngAfterViewInit(): void {
    console.log("ng after view checked");
    this.renderChild();
  }

  public ngOnDestroy(): void {
    this.popup$.unsubscribe();
  }

  public renderChild(): void {
    // If can't find anchor - return
    if(!this.anchor) {
      console.log("can't find anchor");
      return;
    }
    console.log("renderChild. FIND ANCHOR");
    console.log("anchor", this.anchor);

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.childComponent);
    console.log(componentFactory);
    let viewContainerRef = this.anchor.viewContainerRef;
    console.log(viewContainerRef);
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(componentRef);
    // Intance will using for, for example, Input() el
    //componentRef.instance.data = 
  }

  public onClose(): void {
    this.store.dispatch(new isnotShowPopup());
  }
}
