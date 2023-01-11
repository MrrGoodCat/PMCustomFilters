import { Component, Input, Output, EventEmitter, OnInit, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { ComboBoxItem } from '../Interfaces/ComboBoxItem';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true
    }
  ]
})
export class CustomDropdownComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() options: ComboBoxItem[]; // define an input property for the options
  @Input() placeholder: string; // define an input property for the placeholder text
  @Input() isSearchEnabled: boolean; // define an input property for the search through the options
  @Output() selectedOption: EventEmitter<ComboBoxItem> = new EventEmitter(); // define an output property for the selected option


  value: string = '';
  isOpen = false;
  selected: ComboBoxItem;
  searchText = '';

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { 
    this.options = [];
    this.placeholder = '';
    this.isSearchEnabled = false;
    this.selected = {key: 0, name: ''};
  }

  onChange: (value: string) => void = () => {
    console.log('onChange: ' + this.value);
  };
  onTouched: () => void = () => {};

  ngOnInit(): void {
    
  }
  writeValue(obj: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
    console.log('writeValue: ' + obj);
    
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // validator "Required
    if (control.value === '') {
    return { required: true };
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

  clickOutside() {
    this.isOpen = false;
  }

  resetSelectedOption() {
    this.selected = {key: 0, name: ''}
    this.selectedOption.emit(this.selected);
  }

  selectOption(option: ComboBoxItem) {
    this.selected = option;
    this.selectedOption.emit(option);
    this.isOpen = false;
    this.searchText = '';
  }

  filterOptions() {
    return this.options.filter(opt => opt?.name?.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
