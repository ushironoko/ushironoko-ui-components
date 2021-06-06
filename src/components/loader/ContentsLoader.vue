<template>
  <div>
    <template v-for="n in lines">
      <div
        v-if="isOneLine || n >= 1"
        :key="`line-${n}`"
        data-test="long-loader"
        class="relative w-full h-8 mb-2 overflow-hidden bg-gray-100 bg-no-repeat after:transform first:my-2 rounded-5 after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-gray-100 after:via-gray-200 after:to-gray-100 contents-loader"
      ></div>
      <div
        v-else
        :key="`line-${n}`"
        data-test="half-loader"
        class="relative w-1/2 h-8 mb-2 overflow-hidden bg-gray-100 bg-no-repeat after:transform first:my-2 rounded-5 after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-gray-100 after:via-gray-200 after:to-gray-100 contents-loader"
      ></div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentsLoader',
  props: {
    line: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const lines = Array.from(new Array(props.line)).map((_,i) => i).reverse()
    const isOneLine = lines.length === 1;
    
    return {
      lines,
      isOneLine,
    };
  },
});
</script>

<style lang="postcss" scoped>
.contents-loader {
  &::after {
    animation: shimmer 2s infinite;
    content: '';
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
