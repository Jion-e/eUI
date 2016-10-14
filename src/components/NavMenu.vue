<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>NavMenu:</h1>
      <p>
        mode(模式):horizontal/vertical       <br>
        theme(主题): light/dark               <br>
        default-active(当前激活菜单的index): string              <br>
        default-openeds(当前打开的submenu的 key 数组): array      <br>
        unique-opened(是否只保持一个子菜单的展开): true/false      <br>
        router(是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转): true/false
      </p>
      <strong>事件:</strong>
      <p>
        select(菜单激活回调): 回调参数(index:选中菜单项的index, indexPath:选中菜单项的index path)            <br>
        open(SubMenu展开的回调): 回调参数(index:打开的subMenu的index, indexPath:打开的subMenu的index path)  <br>
        close(SubMenu收起的回调):回调参数(index:收起的subMenu的index, indexPath:收起的subMenu的index path)  <br>
      </p>
      <strong>SubMenu:</strong>
      <p>
        index(唯一标志): string
      </p>
      <strong>MenuItem:</strong>
      <p>
        index(唯一标志): string
        route(VueRouter路径对象):	Object
      </p>
      <strong>MenuGroup:</strong>
      <p>
        title(分组标题):string
      </p>
    </div>

    <strong>顶栏:</strong>
    <el-menu theme="dark" default-active="1" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">订单管理</el-menu-item>
    </el-menu>

    <strong>侧栏:</strong>
    <el-menu theme="dark" default-active="2" mode="vertical" :default-openeds="arr">
       <el-submenu index="1">
         <template slot="title"><i class="el-icon-message"></i>导航一</template>
         <el-menu-item-group title="分组一">
           <el-menu-item index="1-1">选项1</el-menu-item>
           <el-menu-item index="1-2">选项2</el-menu-item>
         </el-menu-item-group>
         <el-menu-item-group title="分组2">
           <el-menu-item index="1-3">选项3</el-menu-item>
         </el-menu-item-group>
       </el-submenu>
       <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
       <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
     </el-menu>
     <!-- <p>{{arr}}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleselect(){

    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
