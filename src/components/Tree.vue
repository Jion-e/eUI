<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Tree:</h1>
      <p>
        data(数据): array                                 <br>
        props(配置选项): object                           <br>
        load(加载子树数据的方法): function(node, resolve)  <br>
        show-checkbox(节点是否可被选择): true/false
      </p>
      <strong>props:</strong>
      <p>
        label(指定节点标签为节点对象的某个属性值): string     <br>
        children(指定子树为节点对象的某个属性值): string
      </p>
      <strong>事件:</strong>
      <p>
        node-click(节点被点击时的回调): 回调参数(传递给 data 属性的数组中该节点所对应的对象) <br>
        check-change(节点选中状态发生变化时的回调):	三个参数(传递给 data 属性的数组中该节点所对应的对象、
节点本身是否被选中、节点的子树中是否有被选中的节点)
      </p>
    </div>

    <strong>普通树:</strong>
    <el-tree :data="data" :props="defaultProps"></el-tree>

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
       label: '一级 1',
       children: [{
         label: '二级 1-1'
       }]
     }, {
       label: '一级 2',
       children: [{
         label: '二级 2-1'
       }, {
         label: '二级 2-2'
       }]
     }, {
       label: '一级 3',
       children: [{
         label: '二级 3-1'
       }, {
         label: '二级 3-2'
       }]
     }],
     defaultProps: {
       children: 'children',
       label: 'label'
     }
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleNodeClick(){
      console.log('handleNodeClick');
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
