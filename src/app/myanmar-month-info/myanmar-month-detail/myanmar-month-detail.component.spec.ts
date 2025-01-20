import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyanmarMonthDetailComponent } from './myanmar-month-detail.component';

describe('MyanmarMonthDetailComponent', () => {
  let component: MyanmarMonthDetailComponent;
  let fixture: ComponentFixture<MyanmarMonthDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyanmarMonthDetailComponent]
    });
    fixture = TestBed.createComponent(MyanmarMonthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
