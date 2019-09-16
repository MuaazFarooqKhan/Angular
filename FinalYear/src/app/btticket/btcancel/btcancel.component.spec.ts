import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcancelComponent } from './btcancel.component';

describe('BtcancelComponent', () => {
  let component: BtcancelComponent;
  let fixture: ComponentFixture<BtcancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
