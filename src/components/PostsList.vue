<template>
  <ul class="list">
    <post-item
      v-for="post of allPosts"
      :key="post.id"
      :post="post"
    ></post-item>
  </ul>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'posts-list',
  components: {
    PostItem,
  },
  computed: mapGetters(['allPosts']),
};
</script>

<style scoped>
  .list {
    margin: 0 50px 0 0;
    list-style: none;
    flex-grow: 1;
    max-width: calc(100% - 550px);
  }
</style>