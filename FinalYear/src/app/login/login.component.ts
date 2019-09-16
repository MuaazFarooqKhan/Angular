import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  pass:string="";
  uname:string="";

  constructor(private frmbuilder:FormBuilder) { 
    this.loginForm=frmbuilder.group({
      'pass': [null],
      'uname': [null]
    });
  }

  ngOnInit() {
  }
  resetForm(){
      this.loginForm.reset();
    }
  PostData(loginForm:any){
     this.uname=loginForm.controls.uname.value;
     console.log(this.uname);
     this.pass=loginForm.controls.pass.value;
     console.log(this.pass);

    console.log(loginForm.controls);


  }
}
