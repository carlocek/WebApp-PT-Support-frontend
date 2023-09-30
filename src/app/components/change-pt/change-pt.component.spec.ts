import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePtComponent } from './change-pt.component';

describe('ChangePtComponent', () => {
  let component: ChangePtComponent;
  let fixture: ComponentFixture<ChangePtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePtComponent]
    });
    fixture = TestBed.createComponent(ChangePtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
