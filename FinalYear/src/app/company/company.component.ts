import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators, } from '@angular/forms';
import {companymodel} from './company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  signupForm:FormGroup;
  @Input() productList: companymodel[];

  constructor(private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
      firstname:['',Validators.required],
      lastname:['',[Validators.required,Validators.maxLength(9)]],
      companyname:['',[Validators.required,Validators.maxLength(9)]],
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
