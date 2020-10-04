<template>
  <form class="form" @submit.prevent="addComment">
    <input 
      v-bind:class="{'error': hasError && !name.trim()}"
      name="name"
      type="text"
      placeholder="Name"
      v-model="name"
    >
    <input 
      v-bind:class="{'error': hasError && !email.trim()}"
      name="email"
      type="text"
      placeholder="Body"
      v-model="email"
    >
    <textarea 
      v-bind:class="{'error': hasError && !body.trim()}"
      name="body"
      type="text"
      placeholder="Body"
      v-model="body"
    />
    <button type="submit">
      Add Comment
    </button>
  </form>
</template>

<script>
export default {
  name: 'add-comment',
  data() {
    return {
      name: '',
      email: '',
      body: '',
      hasError: false,
    }
  },
  methods: {
    addComment() {
      const { name, email, body } = this;
      if(name.trim() && email.trim() && body.trim()) {
        this.hasError = false;
        this.$emit('add-comment', { 
          name,
          email,
          body,
        });
        this.name = '';
        this.email = '';
        this.body = '';
      } else {
        this.hasError = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  & input,
  & textarea {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 14px;
    margin-bottom: 10px;
    outline: none;
    padding: 10px;
  }

  & textarea {
    height: 80px;
    resize: none;
  }
}

button {
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s;
  outline: none;

  &:hover {
    background-color: #2055a5;
    color: #ffffff;
  }
}

.error {
  border: 1px solid red;
  border-radius: 2px;
}
</style>