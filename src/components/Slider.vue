<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Slider:</h1>
      <p>
        min(最小值): number          <br>
        max(最大值): number          <br>
        step(步长): number           <br>
        show-input(是否显示输入框): true/false  <br>
        show-stops(是否显示间断点): true/false  <br>
      </p>
      <strong>事件:</strong>
      <p>
        change: 值改变触发
      </p>
    </div>

   <strong>默认</strong>
   <el-slider v-model="value1"></el-slider>
   <p>{{value1}}</p>

   <strong>显示间断点:</strong>
   <el-slider v-model="value2" :step="10" show-stops ></el-slider>

   <strong>带有输入框:</strong>
   <el-slider v-model="value3" show-input ></el-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 50,
      value2: 0,
      value3: 0,
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
.el-slider__stop{
  background-color: #444;
}
</style>
