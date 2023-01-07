
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComboBoxItem } from '../Interfaces/ComboBoxItem';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../Services/DataService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFilterTypes } from '../Enums/CustomFilterTypes';
import { CustomFiltersOperators } from '../Enums/CustomFiltersOperators';
import { FILTERS_TO_OPERATORS_MAPPING } from '../Constants/Generic';

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
  private selectedFilterType: CustomFilterTypes = CustomFilterTypes.AGENT_ID;
  private selectedOperator: CustomFiltersOperators = CustomFiltersOperators.Is;



  ngOnInit(): void {
    this.subscription.add(this.dataService.getCustomFilters().subscribe((data) => {
      this.customFilters = this.convertCustomFiltersToComboBoxItems(data);
    }));

    this.subscription.add(this.dataService.getOperators().subscribe((data) => {
      this.operators = this.convertOperatorsToComboBoxItems(data);
    }));

    this.filtersGroup = this.formBuilder.group({
      filterType: ['', Validators.required],
      listOfOperators: ['', Validators.required],
      filterValue: ['', Validators.required]

    })
  }

  onCustomFilterTypeSelected(event: any) {
    this.selectedFilterType = event.name as CustomFilterTypes;
    this.filterOperators(this.selectedFilterType);
    console.log(event);
  }
  onOperatorSelected(event: any) {
    this.selectedOperator = event.name as CustomFiltersOperators;
    console.log(event);
  }

  filterOperators(filterType: CustomFilterTypes) {
    if(FILTERS_TO_OPERATORS_MAPPING.has(filterType)) {
    this.operators = this.convertOperatorsToComboBoxItems(FILTERS_TO_OPERATORS_MAPPING.get(filterType) as CustomFiltersOperators[]);
    } else { 
      this.operators = this.convertOperatorsToComboBoxItems(FILTERS_TO_OPERATORS_MAPPING.get('Default') as CustomFiltersOperators[]); 
    }
    //return this.convertOperatorsToComboBoxItems((FILTERS_TO_OPERATORS_MAPPING[filterType] | FILTERS_TO_OPERATORS_MAPPING['Default']) as CustomFiltersOperators[]);
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
