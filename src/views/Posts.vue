<template>
  <div>
    <loader v-if="isLoading"></loader>
    <div  class="posts" v-else>
      <posts-list></posts-list>
      <post-details
        v-if="selectedPostId"
      ></post-details>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader.vue';
import PostsList from '@/components/PostsList.vue';
import PostDetails from '@/components/PostDetails.vue';

export default {
  name: 'Posts',
  components: {
    PostsList,
    PostDetails,
    Loader,
  },
  async mounted() {
    this.$store.dispatch('fetchPosts')
      .then(() => {
        this.$store.commit('setIsLoading', false);
      });
  },
  computed: mapGetters(['isLoading', 'selectedPostId']),
} 
</script>

<style scoped>
h1 {
  margin: 20px 0;
}
.posts {
  display: flex;
  justify-content: stretch;
}
</style>