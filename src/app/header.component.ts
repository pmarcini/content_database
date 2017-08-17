import {Component, Input} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'header-comp',
  templateUrl: './html/header.component.html',
  styleUrls: ['./css/header.component.css']
})

export class HeaderComponent {
  
  constructor(public myService: DataService){}

}