<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <img v-bind:src="imgURL" alt="" />
    <ul>
      <li v-for="(item, index) in movies" :key="index" >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    message: 'what are you doing?',
    imgURL: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4769961793e644ab8c12e993948fdee1~tplv-k3u1fbpfcp-watermark.image',
    movies: ['秦时明月','天行九歌','玲珑','少年歌行'],
    counter: 0,
  }),
  methods: {
    add: function () {
      this.counter++;
    },
    sub: function () {
      this.counter--;
    },
  },
};
</script>

<style lang="scss">
</style>
