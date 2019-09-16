import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { CommonModule }  from '@angular/common';
import "hammerjs";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { 
  MatSliderModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { CreatbtComponent } from './creatbt/creatbt.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { BTComponent } from './admin/bt/bt.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { BussesComponent } from './admin/busses/busses.component';
import { StationComponent } from './admin/station/station.component';
import { ParchiComponent } from './parchi/parchi.component';
import { BookingComponent } from './parchi/booking/booking.component';
import { CancelComponent } from './parchi/cancel/cancel.component';
import { BtticketComponent } from './btticket/btticket.component';
import { BtbookingComponent } from './btticket/btbooking/btbooking.component';
import { BtcancelComponent } from './btticket/btcancel/btcancel.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CompanyComponent,
    AdminComponent,
    CreatbtComponent,
    DashboardComponent,
    UserprofileComponent,
    BTComponent,
    ScheduleComponent,
    BussesComponent,
    StationComponent,
    ParchiComponent,
    BookingComponent,
    CancelComponent,
    BtticketComponent,
    BtbookingComponent,
    BtcancelComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  exports: [
    MatSliderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
