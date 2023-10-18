import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExerciseProgressionComponent } from './view-exercise-progression.component';

describe('ViewExerciseProgressionComponent', () => {
  let component: ViewExerciseProgressionComponent;
  let fixture: ComponentFixture<ViewExerciseProgressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewExerciseProgressionComponent]
    });
    fixture = TestBed.createComponent(ViewExerciseProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
