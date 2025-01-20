import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyanmarMonthListComponent } from './myanmar-month-list.component';

describe('MyanmarMonthListComponent', () => {
  let component: MyanmarMonthListComponent;
  let fixture: ComponentFixture<MyanmarMonthListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyanmarMonthListComponent]
    });
    fixture = TestBed.createComponent(MyanmarMonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
