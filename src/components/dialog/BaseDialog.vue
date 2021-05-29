<template>
  <teleport v-if="visible" to="body">
    <div
      class="fixed top-0 left-0 flex items-start justify-center w-screen h-screen overflow-y-scroll backdrop-filter backdrop-blur-md"
      @click="clickBackDrop"
    >
      <section
        class="box-border max-w-screen-sm p-3 mx-2 my-16 bg-white shadow-xl rounded-20"
      >
        <header>
          <div class="w-full text-center">
            <slot name="title"></slot>
          </div>
        </header>
        <div class="py-3">
          <slot name="body" />
        </div>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </section>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseDialog',
  props: {
    visible: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  emits: ['backdropClicked'],
  setup(_, { emit }) {
    const clickBackDrop = (e: MouseEvent) => {
      e.preventDefault();
      emit('backdropClicked');
    };
    return {
      clickBackDrop,
    };
  },
});
</script>
