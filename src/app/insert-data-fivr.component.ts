import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'insert-data-fivr-comp',
  templateUrl: './html/insert-data-fivr.component.html',
  styleUrls: ['./css/insert-data-fivr.component.css'],
 
})

export class InsertDataFIVRComponent {

    rForm: FormGroup;
    post: any;

    constructor(public myService: DataService, private fb: FormBuilder){

          this.rForm = fb.group({
      
     });

    }

    insertFIVRAnalysis(post){
      console.log("data-component: " + post); 
      //this.myService.insertProduct(post).subscribe()

    }

}

//https://coursetro.com/posts/code/66/Angular-4-Reactive-Forms-Tutorial