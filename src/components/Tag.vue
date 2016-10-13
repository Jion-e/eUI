<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Tag:</h1>
      <p>
        type(样式): 'primary', 'gray', 'success', 'warning', 'danger'   <br>
        closable(是否可关闭): true/false                         <br>
        close-transition(是否禁用关闭时的渐变动画): true/false    <br>
        hit(是否有边框描边): true/false                           <br>
      </p>
      <strong>事件:</strong>
      <p>
        close: 关闭tag时触发的事件
      </p>
    </div>

    <el-tag type="primary">标签1</el-tag>
    <el-tag
      v-for="tag in tags"
      :closable="true"
      :type="tag.type"
      :key="tag"
      :close-transition="false"
      @close="handleClose(tag)"
    >
    {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { key: 1, name: '标签一', type: '' },
        { key: 2, name: '标签二', type: 'gray' },
        { key: 5, name: '标签三', type: 'primary' },
        { key: 3, name: '标签四', type: 'success' },
        { key: 4, name: '标签五', type: 'warning' },
        { key: 6, name: '标签六', type: 'danger' }
      ]
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleClose(tag) {
      this.tags.$remove(tag);
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
