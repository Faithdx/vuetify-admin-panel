<template>
  <div class="login">
    <v-col cols="12" lg="4" class="mx-auto">
      <v-card class="pa-4">
        <div class="text-center">
          <v-avatar size="100" color="indigo lighten-4">
            <v-icon size="40" color="indigo">mdi-account</v-icon>
          </v-avatar>
          <h2 class="indigo--text">Vue login</h2>
        </div>
        <v-form @submit.prevent="submitHandler" ref="form">
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              label="Email"
              placeholder="Email"
              prepend-inner-icon="mdi-account"
              required
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :type="passwordShow ? 'text' : 'password'"
              label="Password"
              placeholder="Password"
              prepend-inner-icon="mdi-key"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordShow = !passwordShow"
              required
            />
            <v-switch label="Remember me" color="indigo"></v-switch>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn :loading="loading" type="submit" color="indigo">
              <span class="white--text px-8">Login</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
    <v-snackbar top color="green" v-model="snackbar">
      Login success
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
    ],
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.snackbar = true;
        }, 3000);
      }
    },
  },
};
</script>
<style scoped lang="sass">
.login 
  background-image: url(../../assets/images/bg-01.png)
  height: 300px
  width: 100%
  display: block
  top: 0
  background-size: cover

</style>