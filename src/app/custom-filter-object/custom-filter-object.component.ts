
import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ComboBoxItem } from '../Interfaces/ComboBoxItem';
import { Subscription } from 'rxjs';
import { DataService } from '../Services/DataService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFilterTypes } from '../Enums/CustomFilterTypes';
import { CustomFiltersOperators } from '../Enums/CustomFiltersOperators';
import { FILTERS_TO_OPERATORS_MAPPING, FILTER_TYPE_TO_VALUE_COMPONNET_MAPPING, FILTER_TYPE_TO_VALUE_OPTIONS_MAPPING, UI_OPERATORS_MAPPING } from '../Constants/Generic';
import { CustomDropdownComponent } from '../custom-dropdown/custom-dropdown.component';
import { ValueComponentTypes } from '../Enums/ValueComponentTypes';

@Component({
  selector: 'app-custom-filter-object',
  templateUrl: './custom-filter-object.component.html',
  styleUrls: ['./custom-filter-object.component.scss']
})
export class CustomFilterObjectComponent implements OnInit, OnDestroy {

  @ViewChild('operatorDropdown') operatorDropdown: CustomDropdownComponent;
  @ViewChild('valueDropdown') valueDropdown: CustomDropdownComponent;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.customFilters = [];
    this.operators = [];
    this.values = [];
    this.valueComponentType = ValueComponentTypes.Text;
    this.filtersGroup = this.formBuilder.group({});
    this.operatorDropdown = new CustomDropdownComponent(this.renderer, this.elementRef);
    this.valueDropdown = new CustomDropdownComponent(this.renderer, this.elementRef);
  }

  public customFilters: ComboBoxItem[];
  public operators: ComboBoxItem[];
  public values: ComboBoxItem[];
  public valueComponentType: ValueComponentTypes;
  public ValueComponentTypes = ValueComponentTypes;
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
      value: ['', Validators.required]

    })
  }

  onCustomFilterTypeSelected(event: any) {
    //FIXME: reset operator after filter selection
    this.operatorDropdown.resetSelectedOption();
    if (this.valueDropdown) {
      this.valueDropdown.resetSelectedOption();
    }
    this.selectedFilterType = event.name as CustomFilterTypes;
    this.filterOperators(this.selectedFilterType);
    this.valueComponentType = this.getValueComponentType(this.selectedFilterType);
    this.values = this.convertFilterValueToComboBoxItems(this.selectedFilterType);
  }
  onOperatorSelected(event: any) {
    this.selectedOperator = event.name as CustomFiltersOperators;
  }
  onValueSelected(event: any) {
    this.filtersGroup.updateValueAndValidity();
  }

  private getOperatorUIText(operator: CustomFiltersOperators): string {
    return UI_OPERATORS_MAPPING.get(operator) as string;
  }

  private getValueComponentType(filter: CustomFilterTypes): ValueComponentTypes {
    return FILTER_TYPE_TO_VALUE_COMPONNET_MAPPING.get(filter) as ValueComponentTypes | ValueComponentTypes.Text;
  }

  private filterOperators(filterType: CustomFilterTypes) {
    if (FILTERS_TO_OPERATORS_MAPPING.has(filterType)) {
      this.operators = this.convertOperatorsToComboBoxItems(FILTERS_TO_OPERATORS_MAPPING.get(filterType) as CustomFiltersOperators[]);
    } else {
      this.operators = this.convertOperatorsToComboBoxItems(FILTERS_TO_OPERATORS_MAPPING.get('Default') as CustomFiltersOperators[]);
    }
  }

  private convertCustomFiltersToComboBoxItems(customFilters: string[]): ComboBoxItem[] {
    return customFilters.map((filterName, index) => {
      return {
        key: index,
        name: filterName
      }
    })
  }
  private convertOperatorsToComboBoxItems(operators: CustomFiltersOperators[]): ComboBoxItem[] {
    return operators.map((operator, index) => {
      return {
        key: index,
        name: this.getOperatorUIText(operator)
      }
    })
  }
  private convertFilterValueToComboBoxItems(customFilter: CustomFilterTypes): ComboBoxItem[] {
    let valueOptions = FILTER_TYPE_TO_VALUE_OPTIONS_MAPPING.get(customFilter);
    if (valueOptions) {

      return valueOptions.map((valueOption, index) => {
        return {
          key: index,
          name: valueOption
        }
      })
    }
    return [];
  }

  onSubmit() {
    console.log(this.filtersGroup.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
