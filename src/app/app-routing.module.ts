import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHospitalsComponent } from './manage-hospitals/all-hospitals/all-hospitals.component';
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';
import { SingleHospitalComponent } from './manage-hospitals/single-hospital/single-hospital.component';
import { AllPharmacyComponent } from './manage-pharmacy/all-pharmacy/all-pharmacy.component';
import { ManagePharmacyComponent } from './manage-pharmacy/manage-pharmacy.component';
import { SinglePharmacyComponent } from './manage-pharmacy/single-pharmacy/single-pharmacy.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


const routes: Routes = [
    {path:'',component:ManageUsersComponent},
    {path:'hospitals',component:ManageHospitalsComponent,children:[
      {path:'',component:AllHospitalsComponent},
      {path:'add',component:SingleHospitalComponent},
      {path:'edit/:id',component:SingleHospitalComponent}
    ]},
    {path:'pharmacy',component:ManagePharmacyComponent,children:[
      {path:'',component:AllPharmacyComponent},
      {path:'add',component:SinglePharmacyComponent},
      {path:'edit/:id',component:SinglePharmacyComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
