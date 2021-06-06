<template>
  <button class="px-2 rounded-md h-11" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  emits: {
    click: null,
  },
  setup(_, { emit }) {
    const handleClick = () => {
      emit('click');
    };

    return {
      handleClick,
    };
  },
});
</script>
