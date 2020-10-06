import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignexamComponent } from './add-assignexam.component';

describe('AddAssignexamComponent', () => {
  let component: AddAssignexamComponent;
  let fixture: ComponentFixture<AddAssignexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssignexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
