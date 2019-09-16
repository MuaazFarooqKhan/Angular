import { Component, OnInit, Input } from '@angular/core';
import {userprofile} from './userprofile.model';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators, } from '@angular/forms';



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  signupForm:FormGroup;
  @Input() productList: userprofile[];


  constructor(private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
      firstname:['',Validators.required],
      lastname:['',[Validators.required,Validators.maxLength(9)]],
      Email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      city:['',Validators.required],
      Username:['',Validators.required],


    });
   }

  ngOnInit() {
  }
  PostData(signupForm:any){
    console.log(this.signupForm.value);
    }
}
