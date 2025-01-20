import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyanmarmonthService {
  private dataUrl = 'assets/MyanmarMonths.json';
  constructor(private http: HttpClient) { }

  getMonthList():Observable<any>{
    console.log(this.dataUrl);
    return this.http.get(this.dataUrl);
  }

  getMonthDetails():Observable<any>{
    console.log(this.dataUrl);
    return this.http.get(this.dataUrl);
  }
}
