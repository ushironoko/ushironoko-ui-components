<template>
  <BaseButton :disabled="disabled" :class="buttonClass" @click="handleClick">
    <slot />
  </BaseButton>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  name: 'PrimaryButton',
  components: {
    BaseButton,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    click: null,
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click');
    };

    const buttonClass = computed(() =>
      props.disabled ? 'text-gray-400 bg-gray-100' : 'text-white bg-gray-800'
    );

    return {
      handleClick,
      buttonClass,
    };
  },
});
</script>
