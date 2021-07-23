<template>
  <v-row justify="center" class="m-style">
    <v-card class="mx-auto">
      <v-img
        class="white--text align-end"
        height="200px"
        src="../assets/images/register/bg_reg-1@3x.png"
      >
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-app-bar-nav-icon color="white">
            <v-icon>mdi-reply</v-icon>
          </v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-btn color="white" icon>
            <span>로그인</span>
          </v-btn>
        </v-app-bar>
        <v-card-title class="flex-column align-center white--text mt-2">
          <v-avatar size="56">
            <img
              alt="title"
              src="../assets/images/register/icon_title@3x.png"
            />
          </v-avatar>
          <span>회원가입</span>
        </v-card-title>
      </v-img>
      <v-card-text>
        <v-container fluid>
          <v-form
            ref="registerForm"
            v-model="valid"
            lazy-validation
            autocomplete="off"
          >
            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="用户名"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.password"
                  :rules="rules.passwordRules"
                  label="密码"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                  :type="show ? 'text' : 'password'"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.passwordConfirm"
                  :rules="[
                    rules.passwordConfirmRules.required,
                    rules.passwordConfirmRules.equal(
                      form.password,
                      form.passwordConfirm
                    ),
                  ]"
                  label="确认密码"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                  :type="show ? 'text' : 'password'"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="primary">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<script>
export default {
  name: "Register",
  data: () => ({
    // 用于验证表单内容填写是否正确
    valid: true,
    // 用于控制密码是否以可见的形式显示
    show: false,
    // 表单填写的内容
    form: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    //验证规则
    rules: {
      usernameRules: [
        (v) => !!v || "用户名不能为空",
        (v) =>
          ((v || "").length >= 1 && (v || "").length <= 20) ||
          "用户名必须在1-20个字符以内",
      ],
      passwordRules: [
        (v) => !!v || "密码不能为空",
        (v) =>
          ((v || "").length >= 6 && (v || "").length <= 30) ||
          "密码必须在6-30个字符以内",
      ],
      passwordConfirmRules: {
        required: (v) => !!v || "请输入确认密码",
        equal: (password, passwordConfirm) =>
          password === passwordConfirm || "两次密码不一致",
      },
    },
  }),
};
</script>
<style scoped>
.m-style{
  margin: -32px -24px;
}
</style>