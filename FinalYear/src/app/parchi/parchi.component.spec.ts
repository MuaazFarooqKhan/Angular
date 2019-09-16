import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParchiComponent } from './parchi.component';

describe('ParchiComponent', () => {
  let component: ParchiComponent;
  let fixture: ComponentFixture<ParchiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParchiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
