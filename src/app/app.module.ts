import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { BodyComponent } from './body.component';
import { HeaderComponent } from './header.component';
import { LeftNavComponent } from './left-nav.component';
import { InsertDataComponent } from './insert-data.component';
import { AppRoutingModule} from './app-routing.module';
import { InsertDataPkgComponent } from './insert-data-pkg.component';
import { InsertDataBrdComponent } from './insert-data-brd.component';

@NgModule({
  declarations: [AppComponent, BodyComponent, HeaderComponent, LeftNavComponent, InsertDataComponent, 
                 InsertDataPkgComponent, InsertDataBrdComponent],

  imports: [BrowserModule,HttpModule,AppRoutingModule,FormsModule,ReactiveFormsModule],

  providers: [DataService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
