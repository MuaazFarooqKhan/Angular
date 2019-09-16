import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { bt } from './bt.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-bt',
  templateUrl: './bt.component.html',
  styleUrls: ['./bt.component.css']
})
export class BTComponent implements OnInit {
  signupForm:FormGroup;
  @Input() productList: bt[];


  constructor(private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
      firstname:['',Validators.required],
      lastname:['',[Validators.required,Validators.maxLength(9)]],
      Email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      city:['',Validators.required],
      Username:['',Validators.required],
      address:['',Validators.required],
    });
   } 

  ngOnInit() {
  }
  PostData(signupForm:any){
    console.log(this.signupForm.value);
    }
}