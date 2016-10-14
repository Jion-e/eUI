<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Steps:</h1>
      <p>
        space(每个step的间距): number  不填写将自适应间距           <br>
        direction(方向): vertical/horizontal                      <br>
        active(当前激活步骤): number                               <br>
        process-status(当前步骤的状态):wait/process/finish/error/success  <br>
        finish-status(结束步骤的状态): wait/process/finish/error/success  <br>
      </p>
      <h1>Step/Step Slot:</h1>
      <p>
        title(标题):  string    <br>
        icon(图标): icon="edit" <br>
        description(描述性文字)
      </p>
    </div>

    <el-steps :space="100" :active="active" >
      <el-step title="步骤1" icon="edit"></el-step>
      <el-step title="步骤2" icon="edit"></el-step>
      <el-step title="步骤3" icon="edit"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;margin-left: 40px;" @click.native="next">下一步</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    next() {
        if (this.active++ > 2) this.active = 0;
      }
  },
  components: {}
};
</script>

<style lang="css">
</style>
