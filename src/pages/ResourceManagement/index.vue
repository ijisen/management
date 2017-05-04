<template>
  <div class="layout">
      <div class="layout-router">
        <router-view></router-view>
      </div>
  </div>
</template>
<!-- 添加"scoped" 属性限制CSS样式只在当前组件中有效 -->
<style scoped>
  .layout{

  }
  .nav{
    margin: 0 auto;
  }
  .nav li{
    display: inline-block;
    padding: 10px 20px;
    opacity: 0.8;
  }
  .nav li:hover,
  .nav li.active{
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255,255,255,0.2);
  }
</style>
<!-- 添加type="es6" 属性使其支持ES6语法 -->
<script type="es6">
  export default {
    name: 'ResourceManagement'
  }

</script>
