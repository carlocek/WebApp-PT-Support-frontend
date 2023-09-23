import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseToWprogramComponent } from './add-exercise-to-wprogram.component';

describe('AddExerciseToWprogramComponent', () => {
  let component: AddExerciseToWprogramComponent;
  let fixture: ComponentFixture<AddExerciseToWprogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExerciseToWprogramComponent]
    });
    fixture = TestBed.createComponent(AddExerciseToWprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
