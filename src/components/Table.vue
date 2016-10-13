<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Table:</h1>
      <p>
        data(显示的数据): array    <br>
        height(table的高度,当内容过长,可实现固定表头的表格): string 默认为自适应高度  <br>
        stripe(是否为斑马纹): true/false        <br>
        border(是否带有纵向边框): true/false    <br>
        fit(列的宽度是否自撑开): true/false      <br>
        fixed-column-count(固定列的个数,当内容过长,可实现固定固定列): number          <br>

        selection-mode(列表项选择模式): single(单选)/multiple(多选)/none             <br>
        allow-no-selection(单选模式是否允许选项为空): true/false                     <br>
      </p>
      <strong>事件:</strong>
      <p>
        selectionchange(当选择项发生变化时会触发该事件):参数(selected)                 <br>
        cellmouseenter(当单元格hover进入时会触发该事件):参数(row, column, cell, event) <br>
        cellmouseleave(当单元格hover退出时会触发该事件):参数(row, column, cell, event) <br>
        cellclick(当某个单元格被点击时会触发该事件):参数(row, column, cell, event)      <br>
      </p>
      <h1>Table Column:</h1>
      <p>
        label(标题): string                       <br>
        property(对应列内容的字段名): string       <br>
        width(宽度): string                       <br>
        sortable(是否排序): true/false             <br>
        resizable(是否可以通过拖动改变宽度): true/false (需在el-table上设置border属性为真) <br>
        type(类型):selection/index (如果设置了selection则显示多选框,如果设置了index则显示该行的索引(从1开始计算))  <br>
        formatter(用来格式化内容,传入row和column): function                 <br>
        show-tooltip-when-overflow(当过长被隐藏时显示 tooltip): true/false  <br>
        inline-template(自定义column模板): 此时不需要配置 property 属性      <br>
        align(对齐方式):　left,center,right                                 <br>
      </p>
    </div>

    <strong>普通表格:</strong>
    <el-table :data="tableData" stripe border>
      <el-table-column property="date" label="日期" width="180"></el-table-column>
      <el-table-column property="name" label="姓名" width="180"></el-table-column>
      <el-table-column property="address" label="地址" width="280"></el-table-column>
    </el-table>

   <strong>多选:</strong>
   <el-table :data="tableData" selection-mode="multiple" @selectionchange="handleSelectionChange">
      <!-- 增加一列显示选择框 -->
     <el-table-column type="selection" width="50"></el-table-column>
     <el-table-column type="index" width="50"></el-table-column>

     <el-table-column property="date" label="日期" width="180"></el-table-column>
     <!-- inline-template(自定义column模板) -->
     <!-- <el-table-column inline-template label="日期" width="180"><div>{{ row.date }}</div></el-table-column> -->

     <el-table-column property="name" label="姓名" width="180"></el-table-column>
     <el-table-column property="address" label="地址" width="280"></el-table-column>
   </el-table>
   <p>{{multipleSelection}}</p>

   <strong>排序:</strong>
   <el-table :data="tableData">
     <el-table-column property="date" label="日期" width="180" sortable></el-table-column>
     <el-table-column property="name" label="姓名" width="180"></el-table-column>
     <el-table-column property="address" label="地址" width="280" :formatter="formatter"></el-table-column>
   </el-table>
   <!-- <p>{{multipleSelection}}</p> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      multipleSelection: []
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    formatter(row, column) {
      // console.log('row:' + JSON.stringify(row));
      // console.log('column:' + JSON.stringify(column));
      return row.address;
    }
  },
  components: {}
};
</script>

<style lang="css">
.el-table--striped .el-table__body tr:nth-child(2n){
  background: #eee !important;
}
</style>
