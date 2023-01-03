import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { ComboBoxItem } from '../Interfaces/ComboBoxItem';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() data: ComboBoxItem[];
  @Input() placeholder: string;
  value: string = '';

  constructor() {
    this.data = [];
    this.placeholder = ''
  }

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // validate(control: AbstractControl<any, any>): ValidationErrors | null {
  //   throw new Error('Method not implemented.');
  // }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
  writeValue(obj: any): void {
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

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('control value: ', control.value);
    // validator "Required
    if (control.value === '') {
    return { required: true };
    }
    return null;
  }

  ngOnInit() :void {
    console.log('data in dropdown: ', this.data)
  }

}
