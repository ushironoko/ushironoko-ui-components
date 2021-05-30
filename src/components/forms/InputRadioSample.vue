<template>
  <div class="m-4">選択中：{{ selectedRadio }}</div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue1" name="radio"
      >radio1</InputRadio
    >
  </div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue2" name="radio"
      >radio2</InputRadio
    >
  </div>

  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue3" :disabled="true" name="radio"
      >radio disabled</InputRadio
    >
  </div>
  <div class="m-4">
    <InputRadio v-model:checked="selectedRadio" :value="radioValue4" :is-error="true" name="radio"
      >radio error</InputRadio
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InputRadio from './InputRadio.vue';

export default defineComponent({
  name: 'InputRadioSample',
  components: {
    InputRadio,
  },
  setup() {
    const radioValue1 = ref('1');
    const radioValue2 = ref('2');
    const radioValue3 = ref('3');
    const radioValue4 = ref('4');

    const selectedRadio = ref(radioValue1.value);

    return {
      radioValue1,
      radioValue2,
      radioValue3,
      radioValue4,
      selectedRadio,
    };
  },
});
</script>
