import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabErrorComponent } from './tab-error.component';

describe('TabErrorComponent', () => {
  let component: TabErrorComponent;
  let fixture: ComponentFixture<TabErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
