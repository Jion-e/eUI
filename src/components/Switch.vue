<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Switch:</h1>
      <p>
        disabled(禁用): true/false                                  <br>
        width: number                                               <br>
        name(name 属性): string                                      <br>
        on-text(打开时的文字): string                                 <br>
        off-text(关闭时的文字): string                                <br>
        on-color(打开时的背景色): #20A0FF                              <br>
        off-color(关闭时的背景色): #20A0FF                             <br>
        on-icon-class(打开时所显示图标的类名,会忽略on-text)             <br>
        off-icon-class(关闭时所显示图标的类名,会忽略 off-text)          <br>
      </p>
      <strong>事件</strong>
      <p>
        change: switch状态发生变化时的回调函数
      </p>
    </div>
    <el-switch
      v-model="value1"
      on-text="yes"
      off-text="no">
    </el-switch>
    <p>{{value1}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: ''
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
