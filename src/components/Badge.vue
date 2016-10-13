<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Badge:</h1>
      <p>
        value(值): string/number     <br>
        max(最大值): number          <br>
        is-dot(小圆点): true/false   <br>
      </p>
    </div>

    <el-badge :value="12" :max="99">
      <el-button size="small">评论</el-button>
    </el-badge>

    <el-badge value="new" style="margin-left:50px;">
      <el-button size="small">评论</el-button>
    </el-badge>

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
