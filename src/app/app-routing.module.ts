import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body.component';
import { InsertDataComponent } from './insert-data.component';
import { InsertDataPkgComponent } from './insert-data-pkg.component';
import { InsertDataBrdComponent } from './insert-data-brd.component';
import { InsertDataMBVRComponent } from './insert-data-mbvr.component';
import { InsertDataFIVRComponent } from './insert-data-fivr.component';

const routes: Routes = [
    {path: '', redirectTo: '/bodyComponent', pathMatch: 'full'},
    {path: 'bodyComponent', component: BodyComponent},
    {path: 'insertDataComponent', component: InsertDataComponent},
    {path: 'insertDataPkgComponent', component: InsertDataPkgComponent},
    {path: 'insertDataBrdComponent', component: InsertDataBrdComponent}, 
    {path: 'insertDataMBVRComponent', component: InsertDataMBVRComponent },
    {path: 'insertDataFIVRComponent', component: InsertDataFIVRComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}