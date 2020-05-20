import Vue from 'vue';
import Vuex from 'vuex';

// https://www.cnblogs.com/xihao/p/11420884.html  vuex使用详解
// https://www.cnblogs.com/LoveAndPeace/p/7273648.html 父子组件之间传值
// https://www.jianshu.com/p/0f41bfe211a8 几大vueUI框架推荐
// https://show.cool-admin.com  又一个ui
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: '黑色眼睛, 望向光明',
  },
  mutations: {
    // 默认值
    changeTitle(state) {
      state.title = '黑夜给了我黑色眼睛，我却用它去寻找光明';
    },
    changeTitleParam(state, payload) {
      state.title = payload.title;
    },
  },

});
export default {
  store,
};
