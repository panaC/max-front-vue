<template>
  <el-menu :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  :router="true" >
    <el-menu-item index="booking">Booking</el-menu-item>
    <el-menu-item index="tickets">My Tickets</el-menu-item>
    <el-submenu index="loginHeader">
      <template slot="title">{{ login }}</template>
      <el-menu-item v-if="!isLogin" index="login">Login</el-menu-item>
      <el-menu-item v-if="!isLogin" index="register">Register</el-menu-item>
      <el-menu-item v-if="isLogin" index="account">My account</el-menu-item>
      <el-menu-item v-if="isLogin" index="logout">Logout</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  private isLogin = false;
  private login = "No LOGIN";
  private activeIndex = "booking";
}
</script>

