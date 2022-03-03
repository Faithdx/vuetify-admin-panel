<template>
  <v-navigation-drawer
    v-model="newdrawer"
    @click="drawerToggle"
    color="#F4F5F9"
    app
  >
    <v-img
      height="140"
      class="pa-4"
      src="https://preview.pixlr.com/images/800wm/1439/2/1439104804.jpg"
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img aspect-ratio="30" src="../assets/images/avatars/girl.png" />
        </v-avatar>
        <h2 class="white--text">Web Dylan</h2>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="deep-purple">
        <v-list-item v-for="(item, i) in links" :key="i" link :to="item.route">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ["drawer"],
  data: () => ({
    selectedItem: 0,
    links: [
      { icon: "mdi-microsoft-windows", text: "Dashboard", route: "/home" },
      { icon: "mdi-account", text: "Profile", route: "/profile" },
      {
        icon: "mdi-clipboard-list-outline",
        text: "Products",
        route: "/products",
      },
      {
        icon: "mdi-card-account-details-outline",
        text: "Orders",
        route: "/orders",
      },
      { icon: "mdi-cog", text: "System Setting", route: "/setting" },
      { icon: "mdi-login", text: "登录", route: "/login" },
      { icon: "mdi-account", text: "注册", route: "/register" },
    ],
  }),
  computed: {
    newdrawer: {
      get() {
        return this.drawer;
      },
      set(s) {
        this.$emit("update", s);
      },
    },
  },
  methods:{
    drawerToggle(){
      this.newdrawer = !this.newdrawer
    }
  }
};
</script>

<style scoped>
div >>> .v-list a {
  text-decoration: none;
}
</style>