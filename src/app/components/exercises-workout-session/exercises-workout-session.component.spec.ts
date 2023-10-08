import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesWorkoutSessionComponent } from './exercises-workout-session.component';

describe('ExercisesWorkoutSessionComponent', () => {
  let component: ExercisesWorkoutSessionComponent;
  let fixture: ComponentFixture<ExercisesWorkoutSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisesWorkoutSessionComponent]
    });
    fixture = TestBed.createComponent(ExercisesWorkoutSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
