<template lang="html">
<div class="box">
  <div class="explain">
    <h1>Layout:</h1>
    <h3>有24个分栏</h3>
    <strong>Row:</strong>
    <p>
      :gutter(栅格间隔): 20       <br>
      type(布局模式): flex(弹性布局)  <br>
      justify(flex 布局下的水平排列方式): start/end/center/space-around/space-between <br>
      align(flex 布局下的垂直排列方式): top/middle/bottom  <br>
    </p>
    <strong>Col:</strong>
    <p>
      :span(占据的列数): 1~24         <br>
      :offset(左侧的间隔格数): 1~24   <br>
      :push(向右移动格数): 1~24       <br>
      :pull(向左移动格数): 1~24       <br>
    </p>
  </div>

  <strong>基础布局:</strong>
  <el-row>
    <el-col :span="24">24</el-col>
  </el-row>
  <el-row>
    <el-col :span="12">12</el-col>
    <el-col :span="12">12</el-col>
  </el-row>

  <strong>分栏间隔:</strong>
  <el-row :gutter="40">
    <el-col :span="12">12</el-col>
    <el-col :span="12">12</el-col>
  </el-row>

  <strong>分栏偏移:</strong>
  <el-row>
    <el-col :span="6">6</el-col>
    <el-col :span="6" :offset="6">6</el-col>
  </el-row>

  <strong>对齐方式:</strong>
  <el-row type="flex" justify="space-between">
    <el-col :span="6">6</el-col>
    <el-col :span="6">6</el-col>
    <el-col :span="6">6</el-col>
  </el-row>
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
 .el-col{
   border: 1px solid #444;
   margin-bottom: 5px;
 }
 /** 清除分栏间隔带来的margin **/
.el-row{
  margin: 0!important;
}
</style>
