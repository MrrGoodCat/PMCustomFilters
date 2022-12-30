import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs"
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
    public getCustomFilters(): Observable<ComboBoxItem[]> {
        return new Observable<ComboBoxItem[]>((observer) => {
            this.http.get<any[]>('/assets/custom-filters-data.json').pipe(
                map(data => {
                    return data.map(item => {
                        return { label: item.label, value: item.value };
                    })
                })
            ).subscribe(data => {
                observer.next(data);
                observer.complete();
            })
        })
    }

    /**
     * name
     */
    public getOperators(): Observable<ComboBoxItem[]> {
        return new Observable<ComboBoxItem[]>((observer) => {
            this.http.get<any[]>('/assets/operators.json').pipe(
                map(data => {
                    return data.map(item => {
                        return { label: item.label, value: item.value };
                    })
                })
            ).subscribe(data => {
                observer.next(data);
                observer.complete();
            })
        })
    }
}

