<template>
  <div class="layout">
    <div class="layout-content">
      <h1>ChannelManagement -- 频道管理</h1>
      <div class="layout-router">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<!-- 添加"scoped" 属性限制CSS样式只在当前组件中有效 -->
<style scoped>
  .layout{
    background-color: red;
    padding-left: 10%;
    padding-right: 10%;
  }
  .layout-content{
    background-color: green;
  }
</style>
<!-- 添加type="es6" 属性使其支持ES6语法 -->
<script type="es6">
  export default {
    name: 'ChannelManagement'
  }
</script>
