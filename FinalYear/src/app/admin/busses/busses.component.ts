import { Component, OnInit, Input } from '@angular/core';
import { bus } from './busses.model'
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-busses',
  templateUrl: './busses.component.html',
  styleUrls: ['./busses.component.css']
})
export class BussesComponent implements OnInit {
  bus:FormGroup;
  @Input() productList: bus[];

  constructor(private frmbuilder:FormBuilder) {
    this.bus=frmbuilder.group({
      addbus:['',[Validators.required,Validators.maxLength(9)]],
      type:['',[Validators.required,Validators.maxLength(9)]],
      timing:['',[Validators.required,Validators.maxLength(9)]],
    });
   }

  ngOnInit() {
  }
  Postbus(bus:any){
    console.log(this.bus.value);
    }
}
