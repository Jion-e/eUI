<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Progress:</h1>
      <p>
        percentage(百分比): number            <br>
        type(类型): line(线性)/circle(圆形)    <br>
        stroke-width(进度条的宽度): number     <br>
        text-inside(进度条显示文字内置在进度条内（只在 type=line 时可用）): true/false   <br>
        status(进度条当前状态): success/exception    <br>
        width(环形进度条画布宽度（只在 type=circle 时可用）):number <br>
        show-text(是否显示进度条文字内容): true/false 
      </p>
    </div>

    <el-progress :percentage="30" :text-inside="true" :stroke-width="20" :show-text="true"></el-progress>
    <el-progress :percentage="60" type="circle"  :stroke-width="8" status="exception" :show-text="true"></el-progress>
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
