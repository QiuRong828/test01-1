<template>
  <div class="header h-100">
    <div class="header-left h-100"></div>
    <div class="header-right h-100">
      <el-dropdown @command="handleCommand" class="h-100">
        <span class="el-dropdown-link d-flex align-items-center">
          <el-avatar :size="30" :src="$store.getters.userInfo.avatar" />
          <span class="mx-2">{{ $store.getters.userInfo.username || '' }}</span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()

const handleCommand = (command) => {
  switch (command) {
    case 'profile':
      handleToProfile()
      break
    case 'logout':
      handleLogout()
      break
  }
}

const handleToProfile = () => {
  router.push('/index')
}

const handleLogout = async () => {
  await store.dispatch('user/logout')
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
