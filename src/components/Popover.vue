<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Popover:</h1>
      <p>
        trigger(触发方式): hover/click/focus <br>
        title(标题): string    <br>
        content(显示的内容,也可以通过slot传入DOM): dom <br>
        width(宽度): string/number  <br>
        placement(定位):top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end  <br>
        value(v-model)状态是否可见: true/false   <br>
        disabled(禁用): true/false               <br>
        offset(偏移量): number                   <br>
        transition(渐变动画): true/false         <br>
        visible-arrow(是否显示Tooltip箭头): true/false    <br>
        options(popper.js 的参数): <a href="https://popper.js.org/documentation.html">popper.js</a> <br>
        openDelay(延迟出现,单位毫秒): number
      </p>
    </div>

    <el-popover
      ref="popover1"
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段容,这是一段容,这是一段容,这是一段容。">
    </el-popover>
    <el-button v-popover:popover1>hover 激活</el-button>
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
