import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LDetailsComponent } from './l-details.component';

describe('LDetailsComponent', () => {
  let component: LDetailsComponent;
  let fixture: ComponentFixture<LDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
