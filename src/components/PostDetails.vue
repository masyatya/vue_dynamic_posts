<template>
  <div class="details">
    <loader
      v-if="isLoadingDetails"
    ></loader>
    <template v-else-if="post">
      <div class="details__heading">
        <h2>Post #{{selectedPostId}}, Details</h2>
        <h4>User #{{post.userId}}</h4>
      </div>
      <div class="details__item">
        <span>Title:</span>
        <p>{{post.title}}</p>
      </div>
      <div class="details__item">
        <span>Body:</span>
        <p class="details__body">{{post.body}}</p>
      </div>
      <h3>Comments</h3>
      <add-comment
        @add-comment="addComment"
      ></add-comment>
      <ul class="comments">
        <post-comment
          v-for="comment of comments"
          :key="comment.id"
          :comment="comment"
        ></post-comment>
      </ul>
    </template>
    <h2 v-else>Details</h2>
  </div>
</template>

<script>
import Loader from '@/components/Loader';
import PostComment from '@/components/PostComment';
import AddComment from '@/components/AddComment';
import { mapGetters } from 'vuex';
export default {
  name: 'post-details',
  components: {
    PostComment,
    Loader,
    AddComment,
  },
  computed: mapGetters(['selectedPostId', 'isLoadingDetails', 'post', 'comments']),
  watch: {
    selectedPostId: function() {
      this.$store.dispatch('fetchPostDetails')
        .then(() => this.$store.commit('setIsLoadingDetails', false));
    }
  },
  methods: {
    addComment(comment) {
      console.log(comment);
      this.comments.unshift(comment);
    },
  }
}
</script>

<style scoped lang="scss">
h2 {
  margin: 0;
}

.details {
  padding: 20px;
  border: 1px solid black;
  width: 400px;

  span {
    font-size: 20px;
  }

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    margin-bottom: 20px;
    display: flex;
    text-align: justify;
    align-items: center;

    & p {
      margin: 0;
    }

    & span {
      min-width: 70px;
    }
  }
}

.comments {
  padding: 0;
  list-style: none;
}
</style>