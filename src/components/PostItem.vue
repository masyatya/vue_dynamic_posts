<template>
  <li class="list__item">
    <span><strong>User #{{post.userId}}</strong></span>
    <div>{{post.title}}</div>
    <button
      type="button"
      @click="selectPost(post.id)"
      v-if="postId !== post.id"
    >
      Open
    </button>
    <button
      type="button"
      @click="selectPost(0)"
      v-else
    >
      Close
    </button>
  </li>
</template>

<script>
export default {
  name: 'post-item',
  props: {
    post: Object,
    postId: Number,
  },
  methods: {
    selectPost(postId) {
      this.$store.commit('setSelectedPostId', postId);
      window.scroll(0, 0);
    }
  }
}
</script>

<style scoped lang="scss">
.list__item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
}

span {
  margin-right: 10px;
  min-width: 60px;
}

button {
  width: 50px;
  margin-left: 10px;
}
</style>