<template>
  <label
    class="inline-flex items-center h-6 align-middle cursor-pointer"
    :class="{ 'cursor-not-allowed': disabled }"
    @change="handleChange"
  >
    <input
      v-bind="$attrs"
      :value="value"
      class="absolute w-0 h-0 outline-none opacity-0"
      type="radio"
      :checked="isChecked"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div
      class="flex items-center justify-center w-6 h-6 border-2 border-gray-200 border-solid rounded-full "
      :class="`${checkedRingClass} ${focusedClass}`"
    >
      <span v-if="isChecked" class="w-3 h-3 rounded-full" :class="`${checkedCircleClass}`" />
    </div>
    <div class="pl-1">
      <slot />
    </div>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'InputRadio',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Array] as PropType<string | number | string[] | undefined>,
      required: true,
    },
    checked: {
      type: [String, Number, Array] as PropType<string | number | string[] | undefined>,
      default: '',
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
    'update:checked': (selectedValue: string | number | string[] | undefined) => true,
    focus: (event: Event) => true,
    blur: (event: Event) => true,
  },
  setup(props, { emit }) {
    const isFocus = ref(false);

    const handleChange = () => {
      if (props.disabled) return;

      emit('update:checked', props.value);
    };

    const handleFocus = (event: Event) => {
      isFocus.value = true;
      emit('focus', event);
    };

    const handleBlur = (event: Event) => {
      isFocus.value = false;
      emit('blur', event);
    };

    const isChecked = computed(() => props.value === props.checked);

    const checkedRingClass = computed(() => {
      if (props.disabled) {
        return 'brder-gray-200 bg-gray-200 shadow-none';
      }
      if (isChecked.value && !props.isError) {
        return 'border-blue-700';
      }

      if (isChecked.value && props.isError) {
        return 'border-red-600';
      }

      return '';
    });

    const checkedCircleClass = computed(() => {
      if (props.disabled) {
        return 'bg-gray-200';
      }

      if (isChecked.value && !props.isError) {
        return 'bg-blue-700';
      }

      if (isChecked.value && props.isError) {
        return 'bg-red-600';
      }

      return '';
    });

    const focusedClass = computed(() => (isFocus.value ? 'ring-2' : ''));

    return {
      handleChange,
      handleFocus,
      handleBlur,
      isChecked,
      checkedRingClass,
      checkedCircleClass,
      focusedClass,
    };
  },
});
</script>
