<template>
  <div class="layout">
    <div class="layout-content">
      <h1>move--</h1>
      <div class="layout-router">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<!-- 添加"scoped" 属性限制CSS样式只在当前组件中有效 -->
<style scoped>
  .layout{
    padding-left: 20%;
    padding-right: 20%;
    background-color: blue;
  }
  .layout-content{
  }
</style>
<!-- 添加type="es6" 属性使其支持ES6语法 -->
<script type="es6">
  export default {
    name: 'move'
  }

</script>
