declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleClick: () => void;
    buttonClass: import("vue").ComputedRef<"text-gray-400 bg-gray-100" | "text-gray-900 bg-gray-200">;
    linkButtonClass: import("vue").ComputedRef<"text-gray-400 bg-gray-100" | "text-gray-900 bg-gray-200">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
} & {}>, {
    disabled: boolean;
}>;
export default _default;
