import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { booking } from './btbooking.model';

@Component({
  selector: 'app-btbooking',
  templateUrl: './btbooking.component.html',
  styleUrls: ['./btbooking.component.css']
})
export class BtbookingComponent implements OnInit {
  signupForm:FormGroup;
  @Input() productList: booking[];
  constructor(private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
      Username:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      cnic:['',[Validators.required]],
      phoneno:['',[Validators.required]],
      amount:['',[Validators.required]],
      noofseats:['',[Validators.required]],
      seatsno:['',[Validators.required]],
    });
   }
  ngOnInit() {
  }
  PostData(signupForm:any){
    console.log(this.signupForm.value);
    }

}
