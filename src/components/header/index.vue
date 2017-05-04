<template>
  <div class="header primary">
    <div class="header-logo">Logo</div>
    <div class="header-title pll prl"><h2>视频业务支撑平台后台管理</h2></div>
    <div class="header-nav">
      <Menu mode="horizontal" theme="dark" active-name="ResourceManagement" @on-select="handleSelect">
        <Submenu name="CarouselManagement">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            轮播管理
          </template>
          <ul>
            <Menu-item name="ChannelManagement">频道管理</Menu-item>
            <Menu-item name="SchedulingManagement">排播管理</Menu-item>
            <Menu-item name="ProgramCheck">节目单审核</Menu-item>
            <Menu-item name="ProgramView">节目单查看</Menu-item>
          </ul>
        </Submenu>
        <Submenu name="ResourceManagement">
          <template slot="title">
            <Icon type="ios-folder"></Icon>
            资源管理
          </template>
          <ul>
            <Menu-item name="DirectoryTree">目录树维护</Menu-item>
            <Menu-item name="ResourceUpload">资源上传</Menu-item>
            <Menu-item name="ResourceAudit">资源审核</Menu-item>
          </ul>
        </Submenu>
        <Menu-item name="SystemSettings">
          <Icon type="settings"></Icon>
          系统设置
        </Menu-item>
        <Submenu name="Move">
          <template slot="title">
            <Icon type="ios-film"></Icon>
            电影
          </template>
          <ul>
            <Menu-item name="Move1">Move1</Menu-item>
            <Menu-item name="Move2">Move2</Menu-item>
            <Menu-item name="Move3">Move3</Menu-item>
          </ul>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>
<!-- 添加"scoped" 属性限制CSS样式只在当前组件中有效 -->
<style scoped>
  .header{
    width: 100%;
    height: 60px;
    background-color: #464c5b;
  }
  .header-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
  }
  .header-title{
    display: inline-block;
    float: left;
    height: 100%;
    width: auto;
    line-height: 60px;
  }
  .header-title h2{
    color: #fff;
  }
  .header-nav{
    display: inline-block;
    width: auto;
    margin: 0 auto;
  }
</style>
<!-- 添加type="es6" 属性使其支持ES6语法 -->
<script type="es6">
  import router from '@/router'
  export default {
    name: 'header',
    data () {
      return {
        title: 'Router',
        activeName: ''
      }
    },
    methods: {
      handleSelect(name) {
        if(this.activeName == name){
          console.log('this is page now')
        }else{
          this.activeName = name;
          router.push({ name: name});
          console.log(name);
        }
      }
    }
  }
</script>
