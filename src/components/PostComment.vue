<template>
  <li class="comment">
    <div class="comment__item">
      <span>Name:</span>
      <p>{{comment.name}}</p>
    </div>
    <hr>
    <div class="comment__item">
      <span>Email:</span>
      <p>{{comment.email}}</p>
    </div>
    <hr>
    <div class="comment__item">
      <span>Body:</span>
      <p>{{comment.body}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'post-comment',
  props: {
    comment: Object,
  },
}
</script>

<style scoped lang="scss">
.comment {
  margin: 20px;
  padding: 20px;
  border: 1px dashed black;

  &__item {
    display: flex;
    align-items: center;
    text-align: justify;

    & span {
      margin-right: 20px;
    }

    & p {
      margin: 0;
    }
  }
}
</style>