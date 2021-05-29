<template>
  <div class="m-4">
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
        <SecondaryButton
          href="http://example.com"
          target="_blank"
          rel="noopener"
          @click="handleClick"
          >Secondary Link</SecondaryButton
        >
      </div>
    </div>

    <div>
      <p class="mb-2 text-2xl">Dialogs</p>
      <div>
        <MyDialog :visible="dialogVisible" @backdrop-clicked="switchDialog">
          <template #title>
            <p class="font-bold">ダイアログ</p>
          </template>
          <template #body>
            本文を記述します
            本文を記述します
            本文を記述します
            本文を記述します
            本文を記述します
          </template>
          <template #footer>
            <div class="flex justify-end"><SecondaryButton @click="switchDialog">close</SecondaryButton></div>
          </template>
        </MyDialog>
      </div>
      <div class="mb-2">
        <PrimaryButton @click="switchDialog">ダイアログ</PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PrimaryButton from './components/buttons/PrimaryButton.vue';
import SecondaryButton from './components/buttons/SecondaryButton.vue';
import MyDialog from './components/dialog/MyDialog.vue';

export default defineComponent({
  name: 'App',
  components: {
    PrimaryButton,
    SecondaryButton,
    MyDialog,
  },
  setup() {
    const handleClick = () => {
      alert('clicked');
    };

    const dialogVisible = ref(false)
    const switchDialog = () => {
      dialogVisible.value = !dialogVisible.value
    }

    return {
      handleClick,
      dialogVisible,
      switchDialog,
    };
  },
});
</script>
