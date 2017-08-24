import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'body-comp',
  templateUrl: './html/body.component.html',
  styleUrls: ['./css/body.component.css']
})

export class BodyComponent{
    users: Array<any>;

  constructor(private dataService: DataService){
    this.dataService.getUsers()
      .subscribe(res => this.users = res);

  }

}