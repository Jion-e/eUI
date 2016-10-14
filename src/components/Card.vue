<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Card:</h1>
      <p>
        header(设置 header,也可以通过slot#header传入DOM): dom  <br>
        body-style(设置body的样式): {padding:'20px'}
      </p>
    </div>

    <el-card>
      <!-- header -->
      <div slot="header">
        <span style="line-height: 36px;">卡片名称</span>
        <el-button style="float: right;" type="primary">操作按钮</el-button>
      </div>
      <!-- body -->
      <div v-for="o in 4">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
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
