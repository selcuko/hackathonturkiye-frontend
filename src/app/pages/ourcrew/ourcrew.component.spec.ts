import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcrewComponent } from './ourcrew.component';

describe('OurcrewComponent', () => {
  let component: OurcrewComponent;
  let fixture: ComponentFixture<OurcrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurcrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
