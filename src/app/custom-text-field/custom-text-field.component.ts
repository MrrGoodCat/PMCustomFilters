import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-text-field',
  templateUrl: './custom-text-field.component.html',
  styleUrls: ['./custom-text-field.component.scss']
})
export class CustomTextFieldComponent implements OnInit {
  @Input() placeholder: string;
  @Output() value: EventEmitter<String> = new EventEmitter();

  constructor() { 
    this.placeholder = '';
    this.value 
  }

  ngOnInit(): void {
  }

}
