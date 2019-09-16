import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatbtComponent } from './creatbt.component';

describe('CreatbtComponent', () => {
  let component: CreatbtComponent;
  let fixture: ComponentFixture<CreatbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
