<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Button:</h1>
      <p>
        type(样式): default,primary,success,warning,danger,info,text    <br>
        size(大小):large,small,mini                 <br>
        icon(图标): 具体图标可参照ele-icon           <br>
        native-type(type属性): button,submit,reset  <br>

        disabled(是否可用): true/false              <br>
        plain(是否有颜色倾向): true/false (默认是defalut,激活时才变色)   <br>
        :loading(是否为加载按钮): true/false          <br>
      </p>
      <strong>事件:</strong>
      <p>
        click.native: 源生dom点击事件
      </p>
    </div>
    <h4>普通按钮:</h4>
    <el-button type="primary" size="large" native-type="submit">按钮</el-button>
    <el-button type="text">文字按钮</el-button>

    <h4>图标按钮:</h4>
    <el-button type="primary" icon="edit">edit</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>

    <h4>按钮组合:</h4>
    <el-button-group>
      <el-button type="primary" icon="edit"></el-button>
      <el-button type="primary" icon="share"></el-button>
      <el-button type="primary" icon="delete"></el-button>
    </el-button-group>

    <h4>加载按钮:</h4>
    <el-button type="primary" :loading="true">加载中</el-button>
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
  h4{font-size: 16px;font-weight: bold;margin-top: 20px;}
</style>
