<template>
  <a
    v-if="$attrs.href"
    :disabled="disabled"
    class="inline-flex items-center justify-center px-2 no-underline rounded-md h-11"
    :class="linkButtonClass"
    ><slot
  /></a>
  <BaseButton v-else :disabled="disabled" :class="buttonClass" @click="handleClick">
    <slot />
  </BaseButton>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  name: 'SecondaryButton',
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
      props.disabled ? 'text-gray-400 bg-gray-100' : 'text-gray-900 bg-gray-200'
    );

    const linkButtonClass = computed(() =>
      props.disabled ? 'text-gray-400 bg-gray-100' : 'text-gray-900 bg-gray-200'
    );

    return {
      handleClick,
      buttonClass,
      linkButtonClass,
    };
  },
});
</script>
