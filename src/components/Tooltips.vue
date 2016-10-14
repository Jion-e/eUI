<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Tooltips:</h1>
      <p>
        effect(主题): dark, light         <br>
        content(显示的内容,也可以通过slot#content传入DOM): dom    <br>
        placement(定位):top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end           <br>
        value(v-model)状态是否可见: true/false   <br>
        disabled(禁用): true/false               <br>
        offset(偏移量): number                   <br>
        transition(渐变动画): true/false         <br>
        visible-arrow(是否显示Tooltip箭头): true/false    <br>
        options(popper.js 的参数): <a href="https://popper.js.org/documentation.html">popper.js</a> <br>
        openDelay(延迟出现,单位毫秒): number 
      </p>
    </div>

    <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
      <el-button>提示</el-button>
    </el-tooltip>

    <el-tooltip placement="top">
      <div slot="content">多行信息<br/>第二行信息</div>
      <el-button>提示</el-button>
    </el-tooltip>
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
