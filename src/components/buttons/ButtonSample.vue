<template>
  <div>
    <p class="mb-2 text-2xl">Buttons</p>
    <div class="mb-2">
      <PrimaryButton @click="handleClick">Primary</PrimaryButton>
    </div>
    <div class="mb-2">
      <PrimaryButton :disabled="true" @click="handleClick">Primary Disabled</PrimaryButton>
    </div>
    <div class="mb-2">
      <SecondaryButton @click="handleClick">Secondary</SecondaryButton>
    </div>
    <div class="mb-2">
      <SecondaryButton :disabled="true" @click="handleClick">Secondary Disabled</SecondaryButton>
    </div>
    <div class="mb-2">
      <SecondaryButton href="http://example.com" target="_blank" rel="noopener" @click="handleClick"
        >Secondary Link</SecondaryButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';

export default defineComponent({
  name: 'ButtonSample',
  components: {
    PrimaryButton,
    SecondaryButton,
  },
  emits: ['click'],
  setup() {
    const handleClick = () => {
      alert('clicked');
    };

    return {
      handleClick,
    };
  },
});
</script>
