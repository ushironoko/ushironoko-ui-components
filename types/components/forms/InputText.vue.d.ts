import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"number" | "password" | "text" | "date" | "tel" | "email">;
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
    listeners: import("vue").ComputedRef<{
        input: ({ target }: {
            target: HTMLInputElement;
        }) => void;
        change: ({ target }: {
            target: HTMLInputElement;
        }) => void;
        focus: (value?: unknown) => void;
        blur: (value?: unknown) => void;
    }>;
    isFocus: import("vue").Ref<boolean>;
    smallLabelClass: import("vue").ComputedRef<"" | "transition origin-top-left transform scale-75 -translate-y-3 ">;
    errorClass: import("vue").ComputedRef<"" | "border-red-500">;
    disabledLabelClass: import("vue").ComputedRef<"" | "bg-gray-200">;
    focusedClass: import("vue").ComputedRef<"border-blue-700 ring-4 ring-blue-100 transition duration-100" | "border-gray-300 ">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (targetValue: string) => true;
    change: (targetValue: string) => true;
    focus: (event: Event) => true;
    blur: (event: Event) => true;
    'update:value': (modelValue: string) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    label: string;
    type: "number" | "password" | "text" | "date" | "tel" | "email";
    value: string;
    placeholder: string;
    isError: boolean;
} & {}>, {
    disabled: boolean;
    type: "number" | "password" | "text" | "date" | "tel" | "email";
    value: string;
    placeholder: string;
    isError: boolean;
}>;
export default _default;
