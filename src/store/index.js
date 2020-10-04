import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import postDetails from './modules/postDetails';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    postDetails,
  }
});