import {HomeService} from './home.service';
import {IApplication} from 'shared/interfaces/IApplication';
import {GreedingComponent} from './greeding/greeding.component';

import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public tiles: Array<object> = [
    {component: GreedingComponent, cols: 3, rows: 1},
    {text: 'О нас', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Преподователи', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Уроки', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  public name: string = "";
  public lastname: string = "";
  public contacts: string = "";
  public goal: string = "";
  public courseType: string= "";

  constructor(private homeService: HomeService) { }

  public onApplicationClear(): void {
    this.name = "";
    this.lastname = "";
    this.contacts = "";
    this.goal = "";
    this.courseType = "";
  }

  public onApplicationRegister(): void {


    if(this.contacts === "")
      return this.homeService.onApplicationError('Вы не указали контактную информацию',
      'Поле для контактной информации не указанно или не валадно.',
      'Укажите валидные контактные данные.');

    const application: IApplication = {
      name: this.name, 
      lastname: this.lastname,
      contacts: this.contacts,
      goal: this.goal,
      courseType: this.courseType
    };
    this.homeService.onRegisterApplication(application);
  }
}
