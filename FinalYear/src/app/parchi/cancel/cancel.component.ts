import { Component, OnInit, Input } from '@angular/core';
import { cancel } from './cancel.model';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  cancel:FormGroup;
  @Input() productList: cancel[];

  constructor(private frmbuilder:FormBuilder) {
    this.cancel=frmbuilder.group({
      firstname:['',Validators.required],
      lastname:['',[Validators.required,Validators.maxLength(9)]],
      Email:['',[Validators.required,Validators.email]],
      amount:['',Validators.required],
      tickets:['',Validators.required],
      Username:['',Validators.required],
      // address:['',Validators.required],
    });
  }

  ngOnInit() {
  }
  PostData(cancel:any){
    console.log(this.cancel.value);
  }
}
