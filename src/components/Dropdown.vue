<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Dropdown:</h1>
      <p>
        type(按钮样式): 同el-button       <br>
        size(按钮尺寸): 同el-button       <br>
        split-button(分裂按钮): true/false    <br>
        menu-align(水平对齐方向): start, end  <br>
        trigger(触发下拉的行为): hover/click   <br>
      </p>
      <strong>事件:</strong>
      <p>
        click: split-button为true时，点击左侧按钮的回调
      </p>
    </div>

    <strong>普通样式:</strong>
    <el-dropdown menu-align="start">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-caret-bottom el-icon-right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <strong>按钮样式:</strong>
    <el-dropdown>
      <el-button type="primary">
        更多菜单<i class="el-icon-caret-bottom el-icon-right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- <strong>分裂按钮:</strong> -->
    <!-- <el-dropdown split-button type="primary" @click="handleClick" >
      更多菜单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->

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
  methods: {
    handleClick(){
      // alert('ss')
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
