import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<string | number | string[] | undefined>;
        required: true;
    };
    checked: {
        type: PropType<string | number | string[] | undefined>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isError: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleChange: () => void;
    handleFocus: (value?: unknown) => void;
    handleBlur: (value?: unknown) => void;
    isChecked: import("vue").ComputedRef<boolean>;
    checkedRingClass: import("vue").ComputedRef<"" | "brder-gray-200 bg-gray-200 shadow-none" | "border-blue-700" | "border-red-600">;
    checkedCircleClass: import("vue").ComputedRef<"" | "bg-gray-200" | "bg-blue-700" | "bg-red-600">;
    focusedClass: import("vue").ComputedRef<"" | "ring-2">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:checked': (selectedValue: string | number | string[] | undefined) => true;
    focus: (event: Event) => true;
    blur: (event: Event) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    value: string | number | string[] | undefined;
    isError: boolean;
    checked: string | number | string[] | undefined;
} & {}>, {
    disabled: boolean;
    isError: boolean;
    checked: string | number | string[] | undefined;
}>;
export default _default;
