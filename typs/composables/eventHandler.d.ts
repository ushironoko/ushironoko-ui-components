export declare const useFocus: (focus: {
    eventName: string;
}, blur: {
    eventName: string;
}) => {
    isFocus: import("vue").Ref<boolean>;
    handleFocus: (value?: unknown) => void;
    handleBlur: (value?: unknown) => void;
};
