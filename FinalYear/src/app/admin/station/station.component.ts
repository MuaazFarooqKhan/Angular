import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators, } from '@angular/forms';
import { schedule } from './station.model';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  station:FormGroup;
  @Input() productList: schedule[];
  bus:FormGroup;
  constructor(private frmbuilder:FormBuilder) {
    this.station=frmbuilder.group({
      addstation:['',Validators.required],
      deletestation:['',[Validators.required,Validators.maxLength(9)]],
    });
   }

  ngOnInit() {
  }
  PostData(station:any){
    console.log(this.station.value);
    }

}
