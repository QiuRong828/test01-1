<template>
  <el-container class="w-100 h-100">
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header class="bg-success">
        <app-header></app-header>
      </el-header>
      <tags-view></tags-view>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AppAside from './Aside'
import AppMain from './Main'
import AppHeader from './Header'
import TagsView from '../components/TagsView'
</script>
<style scoped lang="scss">
.el-aside {
  background-color: #545c64;
}
</style>
