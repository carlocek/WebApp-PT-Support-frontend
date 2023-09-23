import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtDashboardToolbarComponent } from './pt-dashboard-toolbar.component';

describe('PtDashboardToolbarComponent', () => {
  let component: PtDashboardToolbarComponent;
  let fixture: ComponentFixture<PtDashboardToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtDashboardToolbarComponent]
    });
    fixture = TestBed.createComponent(PtDashboardToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
