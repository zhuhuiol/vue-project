<template>

  <div>
    <Menu></Menu>
    <!-- <h1>{{ msg }}</h1>
    <h2>{{ title }}</h2>
    <input v-model="title"/>
    <button @click="test" value="test">test</button>
    <button @click="changeTitle" value="changeTitle">changeTitle</button>
    <button @click="changeTitleParam" value="changeTitleParam">changeTitleParam</button> -->
  </div>


</template>

<script>

import Menu from '../components/Menu';

export default {
  name: 'HomeIndex',
  data() {
    return {
      msg: '断剑重铸之日，其势归来之时',
      title: '哈塞给',
    };
  },
  components: {
    //  组件引用
    Menu,
  },
  computed: {
    //  计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
    // 这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。


  },
  watch: {
    //  侦听器
  },
  methods: {
    //  方法定义
    test() {
      window.console.log(this.msg);
      this.title = this.$store.state.title;
    },
    changeTitle() {
      this.$store.commit('changeTitle');
    },
    changeTitleParam() {
      // 两种方式提交
      // 载荷提交
      // this.$store.commit('changeTitleParam', {title: this.title});
      // 对象提交
      this.$store.commit({
        type: 'changeTitleParam',
        title: this.title,
      });
    },
  },
  created() {
    //  钩子函数，生命周期是在dom创建之后执行
    window.console.log('created----', this.msg);
  },
  beforeCreate() {
    //  钩子函数，生命周期是在dom创建之前执行
    window.console.log('beforeCreate----');
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
