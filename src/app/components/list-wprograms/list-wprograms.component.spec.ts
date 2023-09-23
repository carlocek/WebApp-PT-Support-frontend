import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWprogramsComponent } from './list-wprograms.component';

describe('ListWprogramsComponent', () => {
  let component: ListWprogramsComponent;
  let fixture: ComponentFixture<ListWprogramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWprogramsComponent]
    });
    fixture = TestBed.createComponent(ListWprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
