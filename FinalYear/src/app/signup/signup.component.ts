import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators, } from '@angular/forms';
import {signupmodel} from './singup.model';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  @Input() productList: signupmodel[];

  constructor(private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
      firstname:['',Validators.required],
      lastname:['',[Validators.required,Validators.maxLength(9)]],
      Email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      check:['',Validators.required],

    });
   }

  ngOnInit() {
  }
  PostData(signupForm:any){
    console.log(this.signupForm.value);
    }

}
