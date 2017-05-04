<template>
  <div class="footer mtxl">
    2011-2016 &copy; TalkingData
  </div>
</template>
<!-- 添加"scoped" 属性限制CSS样式只在当前组件中有效 -->
<style scoped>
  .footer{
    background: #f5f7f9;
    text-align: center;
    padding: 20px 0;
    color: #9ea7b4;
  }
</style>
<!-- 添加type="es6" 属性使其支持ES6语法 -->
<script type="es6">
  export default {
    name: 'footer'
  }

</script>
