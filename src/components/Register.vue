<template>
  <v-container fluid>
    <v-row justify="center" class="m-style">
      <v-card class="mx-auto card-box">
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
        <v-card-text class="pb-2">
          <v-form
            ref="registerForm"
            v-model="valid"
            lazy-validation
            autocomplete="off"
          >
            <v-row>
              <v-col class="pb-0">
                <h5 class="mb-2 font-color">账户信息</h5>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="ID"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="密码"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
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
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="订单密码"
                ></v-text-field>
                <v-text-field
                  class="mb-0"
                  outlined
                  dense
                  v-model="form.passwordConfirm"
                  :rules="[
                    rules.passwordConfirmRules.required,
                    rules.passwordConfirmRules.equal(
                      form.password,
                      form.passwordConfirm
                    ),
                  ]"
                  label="确认订单密码"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                  :type="show ? 'text' : 'password'"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col class="pb-0">
                <h5 class="mb-2 font-color">隐私</h5>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="名称"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="手机"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="出生日期"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="电子邮件"
                ></v-text-field>
                <v-text-field
                  class="mb-0"
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="家庭地址"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col class="pb-0">
                <h5 class="mb-2 font-color">银行账户信息</h5>
                <v-select
                  :items="items"
                  label="银行名称"
                  dense
                  outlined
                ></v-select>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="账户持有人"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="form.username"
                  :rules="rules.usernameRules"
                  label="账号"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-4 pb-8">
          <v-btn :disabled="!valid" rounded class="bg-btn">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Register",
  data: () => ({
    //下拉框数据
    items: ["交通银行", "建设银行", "人民银行", "平安银行"],
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
.m-style {
  margin: -44px -36px;
}
.card-box {
  box-shadow: none !important;
  border-radius: 0 !important;
}
.font-color {
  color: #cb0682;
}
.bg-btn{
  background-color: #cb0682 !important;
  color: #ffffff;
  width: 100%;
}
</style>