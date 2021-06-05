<template>
  <div>
    <p class="mb-2 text-2xl">ContentsLoader</p>
    <ContentsLoader :line="2" />
  </div>
  <div>
    <p>fetch data</p>
    <Suspense>
      <template #default>
        <PostView />
      </template>
      <template #fallback>
        <ContentsLoader :line="3" />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostView from '../PostView.vue';
import ContentsLoader from './ContentsLoader.vue';

export default defineComponent({
  name: 'ContentsLoaderSample',
  components: {
    ContentsLoader,
    PostView,
  },
});
</script>
