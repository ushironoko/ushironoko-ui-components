<template>
  <div
    class="relative inline-block w-full overflow-hidden border-2 border-gray-300 border-solid rounded-md text-gray-80 h-14"
    :class="`${focusedClass} ${errorClass} ${disabledLabelClass}`"
  >
    <label class="relative flex items-center h-full px-2 cursor-text">
      <span class="absolute text-gray-400 select-none" :class="`${smallLabelClass}`">
        {{ label }}
      </span>
      <input
        class="w-full mt-3 placeholder-gray-400 focus:outline-none"
        :class="{ 'opacity-100': isFocus || value }"
        :type="type"
        :value="value"
        :placeholder="isFocus ? placeholder : ''"
        :disabled="disabled"
        v-bind="$attrs"
        v-on="listeners"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { useFocus } from '../../composables/eventHandler';

export default defineComponent({
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'text' | 'number' | 'password' | 'email' | 'tel' | 'date'>,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    input: (targetValue: string) => true,
    change: (targetValue: string) => true,
    focus: (event: Event) => true,
    blur: (event: Event) => true,
    'update:value': (modelValue: string) => true,
  },
  setup(props, { emit }) {
    const { isFocus, handleFocus, handleBlur } = useFocus({ eventName: 'focus' }, { eventName: 'blur' })

    const handleInput = ({ target }: { target: HTMLInputElement }) => {
      emit('input', target.value);
      emit('update:value', target.value);
    };

    const handleChange = ({ target }: { target: HTMLInputElement }) => {
      emit('change', target.value);
      emit('update:value', target.value);
    };

    const smallLabelClass = computed(() =>
      isFocus.value || props.value || props.type === 'date'
        ? 'transition origin-top-left transform scale-75 -translate-y-3 '
        : ''
    );

    const errorClass = computed(() => (props.isError ? 'border-red-500' : ''));

    const disabledLabelClass = computed(() =>
      props.disabled && !props.value ? 'bg-gray-200' : ''
    );

    const focusedClass = computed(() =>
      isFocus.value ? 'border-blue-700 ring-blue-100 transition duration-100' : ''
    );

    const listeners = computed(() => ({
      input: handleInput,
      change: handleChange,
      focus: handleFocus,
      blur: handleBlur,
    }));

    return {
      listeners,
      isFocus,
      smallLabelClass,
      errorClass,
      disabledLabelClass,
      focusedClass,
    };
  },
});
</script>
