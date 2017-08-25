import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'insert-data-fivr-comp',
  templateUrl: './html/insert-data-fivr.component.html',
  styleUrls: ['./css/insert-data-fivr.component.css'],
 
})

export class InsertDataFIVRComponent {

    public invoiceForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
      this.invoiceForm = this._fb.group({
        itemRows: this._fb.array([this.initItemRows()])
      });
    }

    /*
    This creates a new formgroup. You can think of it as adding an empty object
    into an array. So we are pushing an object to the formarray 'itemrows' that
    has the property 'itemname'. 
    */
    initItemRows() {
        return this._fb.group({
            itemname: ['']
        });
    }

    addNewRow() {
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        control.push(this.initItemRows());
    }

    deleteRow(index: number) {
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        control.removeAt(index);
    }
}

//https://coursetro.com/posts/code/66/Angular-4-Reactive-Forms-Tutorial

//http://plnkr.co/edit/7jJJhkcgqk4YdjFOXTGF?p=preview