import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from './share/header/header.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';
import { AllHospitalsComponent } from './manage-hospitals/all-hospitals/all-hospitals.component';
import { SingleHospitalComponent } from './manage-hospitals/single-hospital/single-hospital.component';
import { ManagePharmacyComponent } from './manage-pharmacy/manage-pharmacy.component';
import { AllPharmacyComponent } from './manage-pharmacy/all-pharmacy/all-pharmacy.component';
import { SinglePharmacyComponent } from './manage-pharmacy/single-pharmacy/single-pharmacy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManageUsersComponent,
    ManageHospitalsComponent,
    AllHospitalsComponent,
    SingleHospitalComponent,
    ManagePharmacyComponent,
    AllPharmacyComponent,
    SinglePharmacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule, // required animations module
    NgxUiLoaderModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
