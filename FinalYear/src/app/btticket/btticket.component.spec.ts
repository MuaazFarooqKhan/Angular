import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtticketComponent } from './btticket.component';

describe('BtticketComponent', () => {
  let component: BtticketComponent;
  let fixture: ComponentFixture<BtticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
