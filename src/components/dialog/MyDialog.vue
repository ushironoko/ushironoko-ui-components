<template>
  <teleport v-if="visible" to="body">
    <div
      v-bind="$attrs"
      class="fixed top-0 left-0 flex items-start justify-center w-screen h-screen overflow-y-scroll  backdrop-filter backdrop-blur-md"
      @click.stop="clickBackDrop"
    >
      <section
        class="box-border max-w-screen-sm p-3 mx-2 my-16 bg-white shadow-xl rounded-20"
        @click.stop
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
import { defineComponent, watchEffect } from 'vue';

export default defineComponent({
  name: 'MyDialog',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['backdropClicked'],
  setup(props, { emit }) {
    const clickBackDrop = () => {
      emit('backdropClicked');
    };

    watchEffect((onInvalidate) => {
      if (!props.visible) return;

      const overflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';

      onInvalidate(() => {
        document.documentElement.style.overflow = overflow;
      });
    });

    return {
      clickBackDrop,
    };
  },
});
</script>
