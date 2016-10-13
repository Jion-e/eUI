<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Input:</h1>
      <p>
        type(类型): text/textarea    <br>
        value(值): string            <br>
        size(大小):arge,small,mini   <br>
        :maxlength(最大输入长度): 5   <br>
        :minlength(最小输入长度): 2   <br>
        placeholder(占位文本): string <br>
        disabled(禁用): true/false    <br>
        number(指定 model 值为 number 类型): true/false
      </p>
      <h1>Number Input:</h1>
      <p>
        value(值): number             <br>
        min(最小值): number           <br>
        max(最大值): number           <br>
        step(步长): number            <br>
        size(大小): large,small       <br>
        disabled(禁用): true/false    <br>
      </p>
      <strong>事件:</strong>
      <p>
        change:绑定值被改变时触发
      </p>
      <h1>Textarea:</h1>
      <p>
        :rows(输入框行数): 4     <br>
        :autosize(自适应内容高度): {minRows: 2, maxRows: 5}
      </p>
      <h1>Autocomplete:</h1>
      <p>
        后续补充！！！
      </p>
    </div>

    <strong>基础用法:</strong>
    <el-input placeholder="请输入内容" v-model="inputVal"></el-input>
    <span>{{inputVal}}</span>

    <strong>带图标(通过 slot 来指定在 input 中前置或者后置内容):</strong>
    <el-input placeholder="请输入内容" icon="time"></el-input>
    <el-input placeholder="请输入内容">
      <template slot="prepend">Http://</template>
      <el-button slot="append" icon="search"></el-button>
    </el-input>

    <strong>文本:</strong>
    <el-input type="textarea" placeholder="请输入内容" :autosize="{minRows: 2, maxRows: 5}"></el-input>

    <strong>数字输入框:</strong>
     <el-input-number v-model="num1"  @change="handleChange"></el-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal:'',
      num1: 1
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    ms(){
      alert('ss')
    },
    handleChange(){
      // alert('s')
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
