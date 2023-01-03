import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs"
import { CustomFiltersOperators } from "../Enums/CustomFiltersOperators";
import { CustomFilterTypes } from "../Enums/CustomFilterTypes";
import { ComboBoxItem } from "../Interfaces/ComboBoxItem";

@Injectable({
    providedIn: 'root',
})

export class DataService {

    constructor(
        private http: HttpClient
    ) { }
    /**
     * Get custom filters list from json data file
     */
    public getCustomFilters(): Observable<CustomFilterTypes[]> {
        return new Observable<CustomFilterTypes[]>((observer) => {
            this.http.get<any[]>('/assets/custom-filters-data.json')
            .pipe(
                map(data => {
                    return data.map(item => {

                        return item.name;
                    })
                })
            )
            .subscribe(data => {
                observer.next(data);
                observer.complete();
            })
        })
    }

    /**
     * name
     */
    public getOperators(): Observable<CustomFiltersOperators[]> {
        return new Observable<CustomFiltersOperators[]>((observer) => {
            this.http.get<any[]>('/assets/operators.json')
            .pipe(
                map(data => {
                    return data.map(item => {
                        return item.name;
                        // return { label: item.label, value: item.value };
                    })
                })
            )
            .subscribe(data => {
                observer.next(data);
                observer.complete();
            })
        })
    }
}

