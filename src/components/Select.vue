<template lang="html">
  <div class="box">
    <div class="explain">
      <h1>Select:</h1>
      <p>
        multiple(多选): true/false               <br>
        disable(禁用): true/false                <br>
        clearable(单选时清空选项): true/false     <br>
        placeholder(占位符): string              <br>
        name(name属性):	string    <br>
        filterabl(是否可搜索): true/false         <br>
        filter-method(自定义过滤方法):	function   <br>
        remote(是否为远程搜索): true/false        <br>
        remote-method(远程搜索方法): function     <br>
        loading(是否正在从远程获取数据): true/false <br>
      </p>
      <strong>事件:</strong>
      <p>
        change:	选中值发生变化时触发               <br>
      </p>
      <h1>Option:</h1>
      <p>
        value(值): string/number                    <br>
        label(选项的标签,默认与值相同): string/number <br>
        disable(禁用): true/false                   <br>
      </p>
      <h1>Option Group:</h1>
      <p>
        label(组名): string                         <br>
        disable(禁用): true/false
      </p>
    </div>

    <strong>单选:</strong>
    <el-select v-model="selVal">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <p>{{selVal}}</p>

    <strong>多选:</strong>
    <el-select v-model="selVal2" multiple>
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <p>{{selVal2}}</p>

    <strong>分组:</strong>
    <el-select v-model="selVal3" multiple>
      <el-option-group
        v-for="group in options3"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
    <p>{{selVal3}}</p>

    <strong>自定义选项样式:</strong>
    <el-select v-model="selVal4" multiple>
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
    <p>{{selVal4}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
         value: '选项1',
         label: '黄金糕'
       }, {
         value: '选项2',
         label: '双皮奶'
       }, {
         value: '选项3',
         label: '蚵仔煎'
       }, {
         value: '选项4',
         label: '龙须面'
       }, {
         value: '选项5',
         label: '北京烤鸭'
       }],
       options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
       selVal: '',
       selVal2: '',
       selVal3: '',
       selVal4: '',
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
