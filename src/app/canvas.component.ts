import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'canvas-comp',
  templateUrl: './html/canvas.component.html',
  styleUrls: ['./css/canvas.component.css']
})

export class CanvasComponent{

    public invoiceForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
      this.invoiceForm = this._fb.group({
        itemRows: this._fb.array([this.initItemRows()])
        
      });

    }

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

    saveContent(){
      
    }

}


// https://plnkr.co/edit/clTbNP7MHBbBbrUp20vr?p=info 