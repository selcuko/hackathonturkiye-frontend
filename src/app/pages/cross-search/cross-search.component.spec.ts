import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossSearchComponent } from './cross-search.component';

describe('CrossSearchComponent', () => {
  let component: CrossSearchComponent;
  let fixture: ComponentFixture<CrossSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
