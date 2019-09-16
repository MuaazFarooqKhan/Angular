import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { CreatbtComponent } from './creatbt/creatbt.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BTComponent } from './admin/bt/bt.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { BussesComponent } from './admin/busses/busses.component';
import { StationComponent } from './admin/station/station.component';
import { ParchiComponent } from './parchi/parchi.component';
import { CancelComponent } from './parchi/cancel/cancel.component';
import { BookingComponent } from './parchi/booking/booking.component';
import { BtticketComponent } from './btticket/btticket.component';
import { BtbookingComponent } from './btticket/btbooking/btbooking.component';
import { BtcancelComponent } from './btticket/btcancel/btcancel.component';

const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'company',component:CompanyComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'',component:DashboardComponent},
    {path:'userprofile',component:UserprofileComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'bt',component:BTComponent},
    {path:'schedule',component:ScheduleComponent},
    {path:'busses',component:BussesComponent},
    {path:'station',component:StationComponent},
  ]
  },
  {path:'parchi',component:ParchiComponent,
  children:[
    {path:'',component:BookingComponent},
    {path:'booking',component:BookingComponent},
    {path:'cancel',component:CancelComponent},
  ]
  },
  {path:'btticket',component:BtticketComponent,
  children:[
    {path:'',component:BtbookingComponent},
    {path:'Btbooking',component:BtbookingComponent},
    {path:'Btcancel',component:BtcancelComponent},
  ]
  },
  {path:'creatbt',component:CreatbtComponent},
  {path:'userprofile',component:UserprofileComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
