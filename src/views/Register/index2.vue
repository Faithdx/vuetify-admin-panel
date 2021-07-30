<template>
  <v-container fluid>
    <v-row justify="center" class="m-style">
      <v-img
        class="white--text"        
        src="../../assets/images/register/bg_reg_2@3x.png"
      >
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-app-bar-nav-icon color="white">
            <v-icon @click="backHistory">mdi-reply</v-icon>
          </v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-btn color="white" icon>
            <span class="mr-6">로그인</span>
          </v-btn>
        </v-app-bar>
        <v-card-title class="flex-column align-center white--text mt-2">
          <v-avatar size="56">
            <img
              alt="title"
              src="../../assets/images/register/icon_title@3x.png"
            />
          </v-avatar>
          <span>회원가입</span>
        </v-card-title>
      </v-img>    
    </v-row>
     <v-card class="card-box">
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
                <div class="d-flex">
                  <v-text-field
                    outlined
                    dense
                    v-model="form.username"
                    :rules="rules.usernameRules"
                    label="ID"
                  ></v-text-field>
                  <v-btn class="bg-btn ml-4 w-0" rounded> 중복확인</v-btn>
                </div>
                <v-text-field
                  outlined
                  dense
                  v-model="form.phoneNum"
                  :rules="rules.phoneNumRules"
                  label="手机"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="form.email"
                  :rules="rules.emailRules"
                  label="电子邮件"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="form.password"
                  :rules="rules.passwordRules"
                  label="密码"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  :type="show1 ? 'text' : 'password'"
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
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show2 = !show2"
                  :type="show2 ? 'text' : 'password'"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-4 pb-8">
          <v-btn :disabled="!valid" rounded class="btn-style">Register</v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Register",
  data: () => ({
    //日期弹窗
    modal: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    //下拉框数据
    banks: ["交通银行", "建设银行", "人民银行", "平安银行"],
    // 用于验证表单内容填写是否正确
    valid: true,
    // 用于控制密码是否以可见的形式显示
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    // 表单填写的内容
    form: {
      username: "",
      password: "",
      passwordConfirm: "",
      ordersd: "",
      orderpsdConfirm: "",
      ownerName: "",
      phoneNum: "",
      birthday: "",
      email: "",
      address: "",
      bankName: "",
      bankOwner: "",
      account: "",
    },
    //验证规则
    rules: {
      usernameRules: [
        (v) => !!v || "用户名不能为空",
        (v) =>
          ((v || "").length >= 1 && (v || "").length <= 20) ||
          "用户名必须在1-20个字符以内",
      ],
      addressRules: [
        (v) => (v || "").length <= 25 || "地址必须在1-25个字符以内",
      ],
      emailRules: [
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      ],
      phoneNumRules: [
        (value) => {
          const regex = /^1[34578]\d{9}$/;
          return regex.test(value) || "Invalid number.";
        },
      ],
      passwordRules: [
        (v) => !!v || "密码不能为空",
        (v) =>
          ((v || "").length >= 6 && (v || "").length <= 30) ||
          "密码必须在6-30个字符以内",
      ],
      orderpsdRules: [
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
      orderpsdConfirmRules: {
        required: (v) => !!v || "请输入确认密码",
        equal: (password, passwordConfirm) =>
          password === passwordConfirm || "两次密码不一致",
      },
    },
  }),
  methods: {
    backHistory() {
      this.$router.go(-1); //返回路由的上一层
    },
  },
};
</script>
<style scoped>
.m-style {
  margin: -44px -36px;
}
/* .card-box {
  box-shadow: none !important;
  border-radius: 0 !important;
} */
.card-box {
  border-radius: 10px !important;
}
.font-color {
  color: #cb0682;
}
.btn-style {
  background-color: #cb0682 !important;
  color: #ffffff;
  width: 100%;
}
.bg-btn {
  background-color: #cb0682 !important;
  color: #ffffff;
}
</style>