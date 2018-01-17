import {HomeService} from './home.service';

import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public tiles: Array<object> = [
    {text: 'Приветствие', cols: 3, rows: 1},
    {text: 'О нас', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Преподователи', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Уроки', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  public name: string = "";
  public lastname: string = "";
  public goal: string = "";
  public courseType: string= "";

  constructor(private homeService: HomeService) { }

  public onApplicationClear(): void {
    this.name = "";
    this.lastname = "";
    this.goal = "";
    this.courseType = "";
  }

  public onApplicationRegister(): void {
    const application = {
      name: this.name, 
      lastname: this.lastname,
      goal: this.goal,
      courseType: this.courseType
    };

    this.homeService.onRegisterApplication(application);
  }
}
