<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Tabs:</h1>
      <p>
        type(风格): card(卡片)/border-card(带边框的卡片)         <br>
        closable(标签是否可以关闭): true/false (border-card样式有问题) <br>
        active-name(选中选项卡的name): string     <br>
      </p>
      <strong>事件:</strong>
      <p>
        tab-click(选项卡被选中): 参数(被选中的标签tab)    <br>
        tab-remove(选项卡被删除): 参数(被删除的标签tab)   <br>
      </p>
      <h1>Tab-pane:</h1>
      <p>
        label(选项卡标题): string                        <br>
        name(顺序值): 与选项卡activeName对应的标识符       <br>
      </p>
    </div>

    <el-tabs type="card" :closable="true" @tab-click="handleClick" @tab-remove="handleRemove" active-name="2">
      <el-tab-pane label="用户管理" name="1"></el-tab-pane>
      <el-tab-pane label="配置管理" name="2"></el-tab-pane>
      <el-tab-pane label="角色管理" name="3"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="4"></el-tab-pane>
    </el-tabs>
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
  methods: {
    handleRemove(tab) {
       console.log(tab);
     },
     handleClick(tab) {
       console.log(tab);
     }
  },
  components: {}
};
</script>

<style lang="css">
.el-tabs--card .el-tabs__item.is-active.is-closable .el-icon-close {
    width: 14px;
}
</style>
