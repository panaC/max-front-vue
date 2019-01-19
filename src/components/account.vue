<template>
  <el-form label-position="left" label-width="0px" class="login-container">
    <h3 class="title">Account</h3>
    <el-form-item prop="account">
      <el-input type="text" auto-complete="off" v-bind:placeholder="email" v-model="email" :readonly="true"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password"  auto-complete="off" v-bind:placeholder="password" v-model="password"></el-input>
    </el-form-item>
    <el-form-item prop="account">
      <el-input type="text" auto-complete="off" v-bind:placeholder="hccode" v-model="hccode"></el-input>
    </el-form-item>
    <el-form-item prop="account">
      <el-input type="text" auto-complete="off" v-bind:placeholder="dob" v-model="dob"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="handleSubmit" >Modify</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Iuser } from '../services/user.service';

@Component
export default class Login extends Vue {
  _password = "";
  _hccode = "";
  _dob = "";

  beforeCreate() {
    this.$store.state.user.getUser();
  }

  get email() {
    return this.$store.state.user.email;
  }

  get password() {
    this._password = this.$store.state.user.password;
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get hccode() {
    this._hccode = this.$store.state.user.hccode;
    return this._hccode;
  }

  set hccode(value) {
    this._hccode = value
  }

  get dob() {
    this._dob = this.$store.state.user.dateOfBirth;
    return this._dob;
  }

  set dob(value) {
    this._dob = value;
  }

  public handleSubmit() {
    this.$store.state.user.setUser({
      email: this.email,
      password: this._password,
      hccode: this._hccode,
      dateOfBirth: this._dob,
    })
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