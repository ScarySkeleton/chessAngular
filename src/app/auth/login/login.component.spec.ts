// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// import {FormsModule} from '@angular/forms';
// import {Store, StoreModule} from '@ngrx/store';

// import {loginReducer} from './login.reducer';
// import {LoginService} from './login.service';
// import {LoginComponent} from './login.component';
// import {FireBaseService} from 'shared/services/firebase.service';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let mockFireBase: FireBaseService;

//   beforeEach(async(() => {
//     mockFireBase = jasmine.createSpy('mockFireBase');

//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       imports: [
//         FormsModule,
//         FireBaseService,
//         StoreModule.forRoot(loginReducer)
//       ],
//       providers: [LoginService]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
