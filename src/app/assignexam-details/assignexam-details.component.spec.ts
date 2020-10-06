import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignexamDetailsComponent } from './assignexam-details.component';

describe('AssignexamDetailsComponent', () => {
  let component: AssignexamDetailsComponent;
  let fixture: ComponentFixture<AssignexamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignexamDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignexamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
