import { CustomFiltersOperators } from "../Enums/CustomFiltersOperators";
import { CustomFilterTypes } from "../Enums/CustomFilterTypes";
import { ValueComponentTypes } from "../Enums/ValueComponentTypes";

export const FILTERS_TO_OPERATORS_MAPPING = new Map<CustomFilterTypes | 'Default', CustomFiltersOperators[]>([
    ['Default', [CustomFiltersOperators.Is, CustomFiltersOperators.IsNot, CustomFiltersOperators.Contains]],
    [CustomFilterTypes.AGENT_ID, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.AGENT_PHONE_NUMBER, [CustomFiltersOperators.Is, CustomFiltersOperators.IsNot]],
    [CustomFilterTypes.CUSTOM_PHONE_NUMBER, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.DIRECTION, [CustomFiltersOperators.Is, CustomFiltersOperators.IsNot]],
    [CustomFilterTypes.DURATION, [CustomFiltersOperators.Greater, CustomFiltersOperators.Less, CustomFiltersOperators.GreaterOrEqual, CustomFiltersOperators.LessOrEqual]],
    [CustomFilterTypes.INTERACTION_ID, [CustomFiltersOperators.Is, CustomFiltersOperators.IsNot, CustomFiltersOperators.Contains, CustomFiltersOperators.AnyOf]],
    [CustomFilterTypes.IN_LITIGATION_HOLD, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.IN_PLAYBACK_LOCK, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.NX_PCI_VIOLATIONS, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.NX_PRIVACY_DELETION, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.NX_RECORDING_CONSENT_VIOLATION, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.NX_SALES_CONSENT_VIOLATIONS, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.NX_SCRIPT_ADHERENCE_VIOLATIONS, [CustomFiltersOperators.Is]],
    [CustomFilterTypes.SITE_ID, [CustomFiltersOperators.Is, CustomFiltersOperators.IsNot]],
]);
export const UI_OPERATORS_MAPPING = new Map<CustomFiltersOperators, string>([
    [CustomFiltersOperators.Is, 'is'],
    [CustomFiltersOperators.IsNot, 'is not'],
    [CustomFiltersOperators.Contains, 'contains'],
    [CustomFiltersOperators.AnyOf, 'any of'],
    [CustomFiltersOperators.Greater, '>'],
    [CustomFiltersOperators.Less, '<'],
    [CustomFiltersOperators.GreaterOrEqual, '>='],
    [CustomFiltersOperators.LessOrEqual, '<='],
]);
export const FILTER_TYPE_TO_VALUE_COMPONNET_MAPPING = new Map<CustomFilterTypes | 'Default', ValueComponentTypes>([
    ['Default', ValueComponentTypes.Text],
    [CustomFilterTypes.DIRECTION, ValueComponentTypes.Select],
    [CustomFilterTypes.DURATION, ValueComponentTypes.Time],
    [CustomFilterTypes.IN_LITIGATION_HOLD, ValueComponentTypes.Select],
    [CustomFilterTypes.IN_PLAYBACK_LOCK, ValueComponentTypes.Select],
    [CustomFilterTypes.NX_PCI_VIOLATIONS, ValueComponentTypes.Select],
    [CustomFilterTypes.NX_PRIVACY_DELETION, ValueComponentTypes.Select],
    [CustomFilterTypes.NX_RECORDING_CONSENT_VIOLATION, ValueComponentTypes.Select],
    [CustomFilterTypes.NX_SALES_CONSENT_VIOLATIONS, ValueComponentTypes.Select],
    [CustomFilterTypes.NX_SCRIPT_ADHERENCE_VIOLATIONS, ValueComponentTypes.Select],
    [CustomFilterTypes.SITE_ID, ValueComponentTypes.Select],
]);
export const FILTER_TYPE_TO_VALUE_OPTIONS_MAPPING = new Map<CustomFilterTypes, string[]>([
    [CustomFilterTypes.DIRECTION, ['Inbound', 'Outbound', 'Internal', 'External', 'Unknown']],
    [CustomFilterTypes.IN_LITIGATION_HOLD, ['Yes', 'No']],
    [CustomFilterTypes.IN_PLAYBACK_LOCK, ['Yes', 'No']],
    [CustomFilterTypes.NX_PCI_VIOLATIONS, ['Yes', 'No']],
    [CustomFilterTypes.NX_PRIVACY_DELETION, ['Yes', 'No']],
    [CustomFilterTypes.NX_RECORDING_CONSENT_VIOLATION, ['Yes', 'No']],
    [CustomFilterTypes.NX_SALES_CONSENT_VIOLATIONS, ['Yes', 'No']],
    [CustomFilterTypes.NX_SCRIPT_ADHERENCE_VIOLATIONS, ['Yes', 'No']],
    [CustomFilterTypes.SITE_ID, ['1', '2', '3', '4', '5']],
]);