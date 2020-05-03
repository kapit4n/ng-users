import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollsListComponent } from './payrolls-list.component';

describe('PayrollsListComponent', () => {
  let component: PayrollsListComponent;
  let fixture: ComponentFixture<PayrollsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
