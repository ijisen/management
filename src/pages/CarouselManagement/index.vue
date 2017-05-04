<template>
  <div class="layout">
    <h1>CarouselManagement -- 轮播管理</h1>
    <div class="layout-router">
      <router-view></router-view>
    </div>
  </div>
</template>
<!-- 添加"scoped" 属性限制CSS样式只在当前组件中有效 -->
<style scoped></style>
<!-- 添加type="es6" 属性使其支持ES6语法 -->
<script type="es6">
  export default {
    name: 'CarouselManagement'
  }
</script>
