<template>
  <div class="layout mtxl">
    <div class="layout-content pll">
      <Row>
        <i-col span="3" class="tree-bar"style="">
          <Tree :data="baseData"></Tree>
        </i-col>
        <i-col span="21" class="ptl prl pbl pll">
          <div class="control-bar">
              <Button type="primary" icon="plus-round" class="mrl">添加分类</Button>
              <Button type="primary" class="mrl">添加子分类</Button>
              <Button type="primary">删除分类</Button>
            </div>

        </i-col>
      </Row>
    </div>

  </div>
</template>
<!-- 添加"scoped" 属性限制CSS样式只在当前组件中有效 -->
<style scoped>
  .layout{
    padding-left: 10%;
    padding-right: 10%;
  }
  .layout-content{
    background-color: #f5f7f9;
  }
  .tree-bar{
    border-right: 1px solid #d8d8d8
  }
  .tree-bar ul{
    line-height: 30px;
  }
  .tree-bar ul .ivu-tree-title{
    width: 90%;
  }
</style>
<!-- 添加type="es6" 属性使其支持ES6语法 -->
<script type="es6">
  export default {
    name: 'DirectoryTree',
    data () {
      return {
        baseData: [{
          expand: true,
          title: '总分类',
          children: [
            {
            title: '资讯',
            expand: true,
            disabled: false,
            children: [{
              title: '人文'
            }, {
              title: '经济'
            }]
          }, {
              title: '电影',
              expand: false,
              children: [{
                title: '国产'
              },{
                title: '欧美'
              },{
                title: '日本'
              }]
            }, {
              title: '电视剧',
              expand: false,
              disabled: true,
              children: [{
                title: '国产'
              },{
                title: '欧美'
              },{
                title: '日本'
              }]
            }, {
              title: '新闻'
            }, {
              title: '综艺'
            }]
        }]
      }
    }
  }

</script>
