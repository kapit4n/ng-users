import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LFieldComponent } from './l-field.component';

describe('LFieldComponent', () => {
  let component: LFieldComponent;
  let fixture: ComponentFixture<LFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
