import { CustomFiltersOperators } from "../Enums/CustomFiltersOperators";

export interface CustomFilter {
    disabled?: boolean;
    operator: CustomFiltersOperators;
    value?: string;
    editable?: boolean;
    name?: string;
    source?: string;
    file?: File;
}