import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMachineStatisticsComponent } from './view-machine-statistics.component';

describe('ViewMachineStatisticsComponent', () => {
  let component: ViewMachineStatisticsComponent;
  let fixture: ComponentFixture<ViewMachineStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMachineStatisticsComponent]
    });
    fixture = TestBed.createComponent(ViewMachineStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
