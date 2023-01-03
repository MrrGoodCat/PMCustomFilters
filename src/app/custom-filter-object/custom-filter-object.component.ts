
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComboBoxItem } from '../Interfaces/ComboBoxItem';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../Services/DataService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-filter-object',
  templateUrl: './custom-filter-object.component.html',
  styleUrls: ['./custom-filter-object.component.scss']
})
export class CustomFilterObjectComponent implements OnInit, OnDestroy {

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
    ) { 
      this.customFilters = [];
      this.operators = [];
      this.filtersGroup = this.formBuilder.group({})
    }

  public customFilters: ComboBoxItem[];
  public operators: ComboBoxItem[];
  public filtersGroup: FormGroup;
  
  private subscription = new Subscription();


  ngOnInit(): void {
    this.subscription.add(this.dataService.getCustomFilters().subscribe((data) => {
      this.customFilters = this.convertCustomFiltersToComboBoxItems(data);
    }));

    this.subscription.add(this.dataService.getOperators().subscribe((data) => {
      this.operators = this.convertOperatorsToComboBoxItems(data);
    }));

    this.filtersGroup = this.formBuilder.group({
      filterType: ['', Validators.required],
      listOfOperators: ['', Validators.required]

    })
  }

  private convertCustomFiltersToComboBoxItems(customFilters: string[]): ComboBoxItem[] {
    return customFilters.map((filterName, index) => {
      return {
        key: index,
        name: filterName
      }
    })
  }
  private convertOperatorsToComboBoxItems(operators: string[]): ComboBoxItem[] {
    return operators.map((operator, index) => {
      return {
        key: index,
        name: operator
      }
    })
  }

  onSubmit() {
    console.log(this.filtersGroup.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
