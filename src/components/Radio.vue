<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Radio:</h1>
      <p>
        label(value值): string  <br>
        disabled(是否禁用): true/false
      </p>
      <h1>Radio Group:</h1>
      <p>
        size(大小):large,small
      </p>
      <strong>事件</strong>
      <p>
        change: 绑定值变化时触发的事件
      </p>
    </div>
    <h4>普通单选按钮:</h4>
    <el-radio class="radio" v-model="radioVal" label="1">男</el-radio>
    <el-radio class="radio" v-model="radioVal" label="2">女</el-radio>
    <p>{{radioVal}}</p>

    <h4>单选按钮组合:</h4>
    <el-radio-group v-model="radioVal2">
      <el-radio :label="1" size="small">备选项</el-radio>
      <el-radio :label="2">备选项</el-radio>
      <el-radio :label="3">备选项</el-radio>
    </el-radio-group>
    <p>{{radioVal2}}</p>

    <h4>按钮样式:</h4>
    <el-radio-group v-model="radioVal3">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
    <p>{{radioVal3}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioVal: '',
      radioVal2: '',
      radioVal3: '',
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
