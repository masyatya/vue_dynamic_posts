import { getPosts } from '@/api';

export default {
  actions: {
    async fetchPosts({ commit }) {
      const posts = await getPosts();
      commit('updatePosts', posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    setIsLoading(state, value) {
      state.isLoading = value;
    },
  },
  state: {
    posts: [],
    isLoading: true,
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    isLoading(state) {
      return state.isLoading;
    }
  }
}