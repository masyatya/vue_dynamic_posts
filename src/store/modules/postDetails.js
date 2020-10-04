import { getPost, getComments } from '@/api';

export default ({
  actions: {
    async fetchPostDetails({ commit, state }) {
      await commit('setIsLoadingDetails', true);
      const post = await getPost(state.selectedPostId);
      const comments = await getComments(state.selectedPostId);
      
      commit('setPostDetails', post);
      commit('setComments', comments);
    }
  },
  mutations: {
    setPostDetails(state, post) {
      state.post = post;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
    setSelectedPostId(state, postId) {
      state.selectedPostId = postId;
    },
    setIsLoadingDetails(state, value) {
      state.isLoadingDetails = value;
    },
  },
  state: {
    selectedPostId: -1,
    post: null,
    comments: null,
    isLoadingDetails: false,
  },
  getters: {
    selectedPostId(state) {
      return state.selectedPostId;
    },
    isLoadingDetails(state) {
      return state.isLoadingDetails;
    },
    post(state) {
      return state.post;
    },
    comments(state) {
      return state.comments;
    }
  }
})