import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'insert-data-pkg-comp',
  templateUrl: './html/insert-data-pkg.component.html',
  styleUrls: ['./css/insert-data-pkg.component.css'],
 
})

export class InsertDataPkgComponent {

    rForm: FormGroup;
    post: any;
    productName: string;
    productSKU: string;  

    constructor(public myService: DataService, private fb: FormBuilder){

          this.rForm = fb.group({
          'productName': [null],
          'productSKU' : [null]
     });

    }

    insertProduct(post){
      console.log(post);
      this.productName = post.productName;
      this.productSKU = post.productSKU;
      this.myService.insertProduct(this.productName, this.productSKU).subscribe()

    }

}

//https://coursetro.com/posts/code/66/Angular-4-Reactive-Forms-Tutorial