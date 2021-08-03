<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="(item, index) in movies" :key="index">{{ item.message }}</li>
      <h2>当前计数：{{ counter }}</h2>
      <v-btn color="primary" v-on:click="add"> ++ </v-btn>
      <v-btn color="error" @click="sub"> -- </v-btn>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    message: "what are you doing?",
    movies: [
      { message: "啊啊啊啊" },
      { message: "大话西游" },
      { message: "你在干什么?？" },
    ],
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
