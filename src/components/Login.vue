<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ title }}</h2>
    <h2>{{ count }}</h2>
    <button value="test">test</button>
  </div>


</template>

<script>


export default {
  name: 'Login',
  data() {
    return {
      msg: '一点寒芒先到，随后枪出如龙',
      title: '陷阵之志，有死无生',
    };
  },


};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
