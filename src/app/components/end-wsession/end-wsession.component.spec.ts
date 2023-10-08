import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndWsessionComponent } from './end-wsession.component';

describe('EndWsessionComponent', () => {
  let component: EndWsessionComponent;
  let fixture: ComponentFixture<EndWsessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndWsessionComponent]
    });
    fixture = TestBed.createComponent(EndWsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
