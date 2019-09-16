import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parchi',
  templateUrl: './parchi.component.html',
  styleUrls: ['./parchi.component.css']
})
export class ParchiComponent implements OnInit {
  dob= new Date();
  title = 'Ticket Form';
  constructor() { }

  ngOnInit() {
  }

}
