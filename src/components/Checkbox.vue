<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Checkbox:</h1>
      <p>
        label(选中状态的值（只有在checkbox-group下有意义）): string    <br>
        true-label(选中时的值):string         <br>
        false-label(没选中的值): string       <br>
        disabled(是否禁用): true/false        <br>
        checked(是否勾选): true/false         <br>
        indeterminate(不确定，样式为一根横线): true/false  <br>
      </p>
      <strong>事件:</strong>
      <p>change:当绑定值变化时触发的事件</p>
    </div>

    <strong>单独使用可以表示两种状态之间的切换:</strong>
    <el-checkbox class="checkbox" v-model="checked" true-label="可用" false-label="不可用">备选项</el-checkbox>
    <span>{{checked}}</span>

    <strong>多选框:</strong>
    <el-checkbox-group v-model="checkList">
      <el-checkbox class="checkbox" label="复选框 A"></el-checkbox>
      <el-checkbox class="checkbox" label="复选框 B"></el-checkbox>
      <el-checkbox class="checkbox" label="复选框 C" disabled></el-checkbox>
    </el-checkbox-group>
    <p>{{checkList}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: '',
      checkList: ['复选框 C']
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
