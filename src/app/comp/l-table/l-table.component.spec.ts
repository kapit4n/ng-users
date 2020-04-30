import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LTableComponent } from './l-table.component';

describe('LTableComponent', () => {
  let component: LTableComponent;
  let fixture: ComponentFixture<LTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
