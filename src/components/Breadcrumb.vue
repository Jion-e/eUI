<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Breadcrumb:</h1>
      <p>
        separator(分隔符): string
      </p>
      <h1>Breadcrumb Item:</h1>
      <p>
        to(路由跳转对象): 同vue-router的to  <br>
        replace(在使用to进行路由跳转时,启用replace将不会向history添加新记录): true/false
      </p>
    </div>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
