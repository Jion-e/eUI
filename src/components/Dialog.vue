<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Dialog:</h1>
      <p>
        title(标题): string                     <br>
        size(尺寸): tiny/small/large/full       <br>
        top(距离顶部距离): 15%                   <br>
        modal(是否需要遮罩层): true/false        <br>
        lock-scroll(是否在 Dialog 出现时将 body 滚动锁定): true/false     <br>
        custom-class(Dialog 的自定义类名): string     <br>
        close-on-click-modal(是否可以通过点击modal关闭Dialog): true/false <br>
        close-on-press-escape(是否可以通过按下ESC关闭Dialog): true/false  <br>
      </p>
      <strong>事件:</strong>
      <p>
        close(Dialog 关闭的回调) <br>
        open(Dialog 打开的回调)
      </p>
      <h1>Slot:</h1>
      <p>
        footer(Dialog 按钮操作区的内容): dom
      </p>
    </div>

    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-button type="primary" @click.native="dialogVisible = true">点我</el-button>


  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {

  },
  components: {}
};
</script>

<style lang="css">
</style>
