<template>
  <el-form label-position="left" label-width="0px" class="login-container">
    <h3 class="title">Register</h3>
    <el-form-item prop="account">
      <el-input type="text" auto-complete="off" placeholder="email" v-model="email"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password"  auto-complete="off" placeholder="password" v-model="pass"></el-input>
    </el-form-item>
    <el-form-item prop="account">
      <el-input type="text" auto-complete="off" placeholder="HC TGVMAX code" v-model="hc"></el-input>
    </el-form-item>
    <el-form-item prop="account">
      <el-input type="text" auto-complete="off" placeholder="Date de naissance" v-model="dob"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="handleSubmit" >Submit</el-button>
    </el-form-item>
    <router-link to="/login" style="text-align: center; display: block">Login</router-link>
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { router } from '../router/router';

@Component
export default class Login extends Vue {
  private email = "";
  private pass = "";
  private hc = "";
  private dob = "";

  public handleSubmit() {
    try {
      this.$store.state.user.register({
        email: this.email,
        password: this.pass,
        hccode: this.hc,
        dateOfBirth: this.dob,
      })
      router.push("/booking");
    } finally {

    }
  }
}
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login-container .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login-container .remember {
    margin: 0px 0px 35px 0px;
  }
</style>