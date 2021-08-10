<template>
  <div class="index">
    <!-- <h1 :style="{ fontSize: '50px', color: 'red' }">{{ message }}</h1> -->
    <ul>
      <li v-for="(item, index) in movies" :key="index">{{ item }}</li>
    </ul>

    <h2>{{ counter }}</h2>
    <v-btn @click="increment">+</v-btn>
    <v-btn @click="decrement">-</v-btn>

    <div>
      <v-text-field
        v-if="isUser"
        ref="username"
        v-model="userName"
        label="UserName"
        placeholder="enter username"
      >
      </v-text-field>
      <v-text-field
        v-else
        ref="email"
        v-model="userEmail"
        label="Email"
        placeholder="enter email"
        required
      ></v-text-field>
      <v-btn @click="isUser = !isUser">切换类型</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    message: "what are you doing?",
    isUser: true,
    userName: "",
    userEmail: "",
    movies: ["秦时明月", "天行九歌", "玲珑", "少年歌行"],

    counter: 0,
  }),
  computed: {
    // fullName: function () {
    //   return this.firstName + " " + this.lastName;
    // },
    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
    },
    totalPrice: function () {
      let result = 0;
      for (let i = 0; i < this.books.length; i++) {
        result += this.books[i].price;
      }
      return result;
    },
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>

<style lang="scss">
</style>
