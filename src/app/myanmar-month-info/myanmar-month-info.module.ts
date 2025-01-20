import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyanmarMonthListComponent } from './myanmar-month-list/myanmar-month-list.component';
import { MyanmarMonthInfoRoutingModule } from './myanmar-month-info-routing.module';
import { MyanmarMonthDetailComponent } from './myanmar-month-detail/myanmar-month-detail.component';



@NgModule({
  imports: [
    CommonModule,
    MyanmarMonthInfoRoutingModule
  ],
  declarations: [
    MyanmarMonthListComponent,
    MyanmarMonthDetailComponent
  ]
})
export class MyanmarMonthInfoModule { }
