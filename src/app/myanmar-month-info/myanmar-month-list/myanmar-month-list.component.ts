import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyanmarmonthService } from 'src/app/services/myanmarmonth.service';

@Component({
  selector: 'app-myanmar-month-list',
  templateUrl: './myanmar-month-list.component.html',
  styleUrls: ['./myanmar-month-list.component.css']
})
export class MyanmarMonthListComponent implements OnInit {
  items: any[] = [];
  displayStyle = "none"; 
  detailHeader:string="";
  detailMonth:string="";
  constructor(private router: Router, private dataService: MyanmarmonthService) {

  }

  ngOnInit(): void {
    this.dataService.getMonthList().subscribe(data => {
      this.items = data.Tbl_Months;
      console.log('data', this.items);
    });
  }

  GetDetails(value: any) {
    let selectMonthDetails = this.items.filter(x => x.Id == value);
    this.detailHeader = selectMonthDetails[0].MonthMm;
    this.detailMonth = selectMonthDetails[0].Detail;
    this.displayStyle = "block"; 
    console.log(selectMonthDetails);
  }
  
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
