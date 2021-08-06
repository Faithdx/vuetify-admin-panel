<template>
  <div class="index">
    <!-- <h1 :style="{ fontSize: '50px', color: 'red' }">{{ message }}</h1> -->
    <ul>
      <li v-for="(item, index) in movies" :key="index">{{ item }}</li>
    </ul>
    <h2>{{ fullName }}</h2>
    <h2>总价格: {{totalPrice}}</h2>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    message: "what are you doing?",
    books: [
      { id: 110, name: "Unix编程艺术", price: 119 },
      { id: 111, name: "代码大全", price: 109 },
      { id: 112, name: "深入理解计算机原理", price: 99 },
      { id: 113, name: "现代操作系统", price: 89 },
    ],
    movies: ["秦时明月", "天行九歌", "玲珑", "少年歌行"],
    firstName: "Lebron",
    lastName: "James",
  }),
  computed: {
    // fullName: function () {
    //   return this.firstName + " " + this.lastName;
    // },
    fullName:{
      get:function (){
        return this.firstName + ' ' + this.lastName
      }
    },
    totalPrice: function () {
      let result = 0;
      for (let i = 0; i < this.books.length; i++) {
        result += this.books[i].price;
      }
      return result;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
