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


    productName: String;
    productCodeName: String; 
    productSKU: String;
    productType: "Package"
    stackupType: String; 
    numberOfStackupLayers: any; 
    socketType: String; 
    containsFIVR: Boolean; 
    containsMCDRAM: Boolean; 
    containsFabric: Boolean; 
    containsFPGA: Boolean; 
    memoryType: String; // DDR3 or DDR4
    pcieGen: String; 
    coreCount: any; 

    constructor(public myService: DataService, private fb: FormBuilder){

          this.rForm = fb.group({
          'productName': [null],
          'productCodeName': [null],
          'productSKU' : [null],
          'productType': "Package", //board or package 
          'stackupType': [null], 
          'numberOfStackupLayers': [null], 
          'socketType': [null], 
          'containsFIVR': false,
          'containsMCDRAM': false, 
          'containsFabric': false, 
          'containsFPGA': false, 
          'memoryType': [null], // DDR3 or DDR4
          'pcieGen': [null], 
          'coreCount': [null]
          
     });

    }

    insertProduct(post){


      //this.productName = post.productName;
      //this.productCodeName = post.productCodeName;
      //this.productSKU = post.productSKU;
      //this.stackupType = post.stackupType;
      console.log("data-component: " + post); 
      this.myService.insertProduct(post).subscribe()

    }

}

//https://coursetro.com/posts/code/66/Angular-4-Reactive-Forms-Tutorial