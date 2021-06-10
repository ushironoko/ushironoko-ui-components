<template>
  <div class="m-4">
    <div ref="countRef">{{ count }}</div>
    <button @click="increment">increment</button>
    <ContentsLoaderSample />
    <ButtonSample />
    <DialogSample />
    <InputTextSample />
    <InputRadioSample />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, ref } from 'vue';
import ButtonSample from './components/buttons/ButtonSample.vue';
import DialogSample from './components/dialog/DialogSample.vue';
import InputRadioSample from './components/forms/InputRadioSample.vue';
import InputTextSample from './components/forms/InputTextSample.vue';
import ContentsLoaderSample from './components/loader/ContentsLoaderSample.vue';

export default defineComponent({
  name: 'App',
  components: {
    ButtonSample,
    DialogSample,
    InputTextSample,
    InputRadioSample,
    ContentsLoaderSample,
  },
  setup() {
    const count = ref(0)
    const countRef = ref(null)

    onBeforeMount(() => {
      console.log('onBeforeMount!')
    })

    const increment = () => count.value++

    onBeforeUpdate(() => {
      console.log(countRef.value)
    })

    return {
      count,
      increment,
      countRef
    }
  },
  data() {
    return {
      test: 'test'
    }
  },
  beforeMount() {
    console.log(this.test)
  },
  mounted() {
    console.log('mounted!!')
  },
  beforeUpdate() {
    console.log('beforeUpdate!')
  }
});
</script>
