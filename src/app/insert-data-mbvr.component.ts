import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'insert-data-mbvr-comp',
  templateUrl: './html/insert-data-mbvr.component.html',
  styleUrls: ['./css/insert-data-mbvr.component.css'],
 
})

export class InsertDataMBVRComponent {

    products: Array<any>;
    rForm: FormGroup;
    post: any;

    constructor(public myService: DataService, private fb: FormBuilder){

          this.rForm = fb.group({
            'productName': [null],

          });
          this.myService.getProducts()
              .subscribe(res => this.products = res);
    }

    insertMBVRAnalysis(post){
      console.log("data-component: " + post); 
      //this.myService.insertProduct(post).subscribe()

    }

}

//https://coursetro.com/posts/code/66/Angular-4-Reactive-Forms-Tutorial