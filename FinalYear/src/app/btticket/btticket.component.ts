import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btticket',
  templateUrl: './btticket.component.html',
  styleUrls: ['./btticket.component.css']
})
export class BtticketComponent implements OnInit {
  dob= new Date();
  title = 'Ticket Form';
  constructor() { }

  ngOnInit() {
  }

}
