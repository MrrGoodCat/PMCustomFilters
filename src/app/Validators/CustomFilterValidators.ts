import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomFilterValidators {
    static filterTypeValidator(control: AbstractControl): ValidationErrors | null {
        const filterType = control.get('filterType');
        const listOfOperators = control.get('listOfOperators');
        if (filterType.value === 'Select Filter Type' && listOfOperators.value === 'Select Operator') {
            return { 'filterType': true };
        }
        return null;
    }
}