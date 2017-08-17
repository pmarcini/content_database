import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'left-nav',
  templateUrl: './html/left-nav.component.html',
  styleUrls: ['./css/left-nav.component.css']
})

export class LeftNavComponent {
    products: Array<any>;

  constructor(private _dataService: DataService){
    this._dataService.getProducts()
      .subscribe(res => this.products = res);
  }

}
