import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExercisesWprogramComponent } from './list-exercises-wprogram.component';

describe('ListExercisesWprogramComponent', () => {
  let component: ListExercisesWprogramComponent;
  let fixture: ComponentFixture<ListExercisesWprogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListExercisesWprogramComponent]
    });
    fixture = TestBed.createComponent(ListExercisesWprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
