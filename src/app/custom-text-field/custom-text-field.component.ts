import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-text-field',
  templateUrl: './custom-text-field.component.html',
  styleUrls: ['./custom-text-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextFieldComponent),
      multi: true
    }
  ]
})
export class CustomTextFieldComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
  @Input() placeholder: string;
  @Output() value: EventEmitter<String> = new EventEmitter();

  constructor() { 
    this.placeholder = '';
    this.value 
  }

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  
  writeValue(obj: any): void {
    this.value.emit(obj);
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
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
