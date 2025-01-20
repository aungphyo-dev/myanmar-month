import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyanmarMonthListComponent } from './myanmar-month-list/myanmar-month-list.component';
import { MyanmarMonthDetailComponent } from './myanmar-month-detail/myanmar-month-detail.component';


const routes: Routes = [
  {
    path: "", children:
    [
      {
        path: '',component: MyanmarMonthListComponent
      },
      {
        path: 'details',component: MyanmarMonthDetailComponent
      }
    ] 
    
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyanmarMonthInfoRoutingModule { }
