import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtbookingComponent } from './btbooking.component';

describe('BtbookingComponent', () => {
  let component: BtbookingComponent;
  let fixture: ComponentFixture<BtbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
