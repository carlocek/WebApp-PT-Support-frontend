import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWprogramComponent } from './search-wprogram.component';

describe('SearchWprogramComponent', () => {
  let component: SearchWprogramComponent;
  let fixture: ComponentFixture<SearchWprogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchWprogramComponent]
    });
    fixture = TestBed.createComponent(SearchWprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
