<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Date Picker:</h1>
      <p>
        readonly(只读): true/false,                                             <br>
        placeholder(占位内容): string,                                          <br>
        type(日期类型): datetime/date/year/month/week                           <br>
        format(日期格式):(年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss)随意组合    <br>
        align(对其方式): left,center,right                                      <br>
        picker-options(当前时间日期选择器特有的选项): object                      <br>
      </p>
      <h1>快捷选项:</h1>
      <p>
        shortcuts(设置快捷选项): 需要传入 { text, onClick } 对象 Object[]         <br>
        disabledDate(设置禁用状态，参数为当前日期，要求返回 Boolean): function
      </p>
      <strong>Shortcuts:</strong>
      <p>
        text(标题文本): string                                                   <br>
        onClick:选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())
      </p>
    </div>

   <strong>默认</strong>
   <el-date-picker
     v-model="value1"
     type="date"
     align="left"
     placeholder="选择日期">
   </el-date-picker>
   <p>{{value1}}</p>

   <strong>带快捷选项</strong>
   <el-date-picker
     v-model="value2"
     type="datetime"
     placeholder="选择日期时间"
     align="right"
     :picker-options="pickerOptions">
   </el-date-picker>
   <p>{{value2}}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: ''
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
