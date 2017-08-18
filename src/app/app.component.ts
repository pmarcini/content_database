import { Component } from '@angular/core';
import { BodyComponent } from './body.component';
import { HeaderComponent } from './header.component';
import { LeftNavComponent } from './left-nav.component';
import { InsertDataComponent } from './insert-data.component';
import { InsertDataPkgComponent } from './insert-data-pkg.component';
import { InsertDataBrdComponent } from './insert-data-brd.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {

  constructor(public myService: DataService){}

}
