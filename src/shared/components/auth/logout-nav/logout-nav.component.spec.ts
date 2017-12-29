import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutNavComponent } from './logout-nav.component';

describe('LogoutComponent', () => {
  let component: LogoutNavComponent;
  let fixture: ComponentFixture<LogoutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
