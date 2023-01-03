import { CustomFiltersOperators } from "../Enums/CustomFiltersOperators";
import { CustomFilterTypes } from "../Enums/CustomFilterTypes";

const FILTERS_TO_OPERATORS_MAPPING = new Map<CustomFilterTypes | 'Default', CustomFiltersOperators[]>([
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
])
