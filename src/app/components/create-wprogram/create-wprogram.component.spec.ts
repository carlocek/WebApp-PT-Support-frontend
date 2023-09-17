import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWprogramComponent } from './create-wprogram.component';

describe('CreateWprogramComponent', () => {
  let component: CreateWprogramComponent;
  let fixture: ComponentFixture<CreateWprogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWprogramComponent]
    });
    fixture = TestBed.createComponent(CreateWprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
