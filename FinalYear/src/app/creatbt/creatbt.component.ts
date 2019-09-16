import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators, } from '@angular/forms';
import {creatbt} from './creatbt.model';

@Component({
  selector: 'app-creatbt',
  templateUrl: './creatbt.component.html',
  styleUrls: ['./creatbt.component.css']
})
export class CreatbtComponent implements OnInit {
  signupForm:FormGroup;
  @Input() productList: creatbt[];

  constructor(private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
      firstname:['',Validators.required],
      lastname:['',[Validators.required,Validators.maxLength(9)]],
      adress:['',[Validators.required,Validators.maxLength(30)]],
      Email:['',[Validators.required,Validators.email]],
      phonenumber:['',Validators.required],
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
