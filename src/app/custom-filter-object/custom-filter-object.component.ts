import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-filter-object',
  templateUrl: './custom-filter-object.component.html',
  styleUrls: ['./custom-filter-object.component.scss']
})
export class CustomFilterObjectComponent implements OnInit {
  @Input() options: any[];
  @Input() placeholder: string;
  @Output() optionSelected = new EventEmitter<any>();
  public searchQuery = '';
  public filteredOptions: any[] = [];

  constructor() { 
    this.options = [];
    this.placeholder = '';
  }

  ngOnInit() {
    this.options = Array.from({ length: 10 }, (_, i) => `Option ${i + 1}`);
    this.filteredOptions = this.options;
  }

  filterOptions() {
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  onOptionSelected(selectedOption: any) {
    this.optionSelected.emit(selectedOption);
  }
}
