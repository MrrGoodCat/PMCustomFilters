import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ComboBoxItem } from '../Interfaces/ComboBoxItem';
import { Observable } from 'rxjs';
import { DataService } from '../Services/DataService';

@Component({
  selector: 'app-custom-filter-object',
  templateUrl: './custom-filter-object.component.html',
  styleUrls: ['./custom-filter-object.component.scss']
})
export class CustomFilterObjectComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    ) { 
      this.customFilters = [];
      this.operators = [];
    }

  public customFilters: ComboBoxItem[];
  public operators: ComboBoxItem[];

  ngOnInit(): void {
    this.dataService.getCustomFilters().subscribe((data) => {
      this.customFilters = data;
    });

    this.dataService.getOperators().subscribe((data) => {
      this.operators = data;
    });
    
    // this.http.get<any[]>('/assets/custom-filters-data.json').pipe(
    //   map(data => { 
    //     return data.map(item => {
    //       return { label: item.label, value: item.value };
    //   })
    // })
    // ).subscribe(data => {
    //   this.customFilters = data;
    //   return data;
    // })
  }



}
