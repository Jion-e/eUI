<template>
<div>
  <div class="sec" id="gaid">
    <gaid></gaid>
  </div>
  <div class="sec" id="layout">
    <layout></layout>
  </div>
  <div class="sec" id="button">
    <v-button></v-button>
  </div>
  <div class="sec" id="radio">
    <radio></radio>
  </div>
  <div class="sec" id="checkbox">
    <checkbox></checkbox>
  </div>
  <div class="sec" id="input">
    <v-input></v-input>
  </div>
  <div class="sec" id="select">
    <v-select></v-select>
  </div>
  <div class="sec" id="switch">
    <v-switch></v-switch>
  </div>
  <div class="sec" id="slider">
    <slider></slider>
  </div>
  <div class="sec" id="date-picker">
    <date-picker></date-picker>
  </div>
  <div class="sec" id="table">
    <v-table></v-table>
  </div>
  <div class="sec" id="tag">
    <tag></tag>
  </div>
  <div class="sec" id="badge">
    <badge></badge>
  </div>
  <div class="sec" id="progress">
    <v-progress></v-progress>
  </div>
  <div class="sec" id="tree">
    <tree></tree>
  </div>

</div>
</template>

<script>
  import gaid from './components/Gaid.vue'
  import layout from './components/Layout.vue'
  import vButton from './components/Button.vue'
  import radio from './components/Radio.vue'
  import checkbox from './components/Checkbox.vue'
  import vInput from './components/Input.vue'
  import vSelect from './components/Select.vue'
  import vSwitch from './components/Switch.vue'
  import slider from './components/Slider.vue'
  import datePicker from './components/DatePicker.vue'
  import vTable from './components/Table.vue'
  import tag from './components/Tag.vue'
  import badge from './components/Badge.vue'
  import vProgress from './components/Progress.vue'
  import tree from './components/Tree.vue'

  export default {
    name: 'app',
    components: {
      gaid,
      layout,
      vButton,
      radio,
      checkbox,
      vInput,
      vSelect,
      vSwitch,
      slider,
      datePicker,
      vTable,
      tag,
      badge,
      vProgress,
      tree,
    }
  };
</script>

<style media="screen">
  body{padding: 40px;font-family: '微软雅黑';color: #444;}
  .sec{background: #eee;margin: 20px;padding: 10px;}
  p{line-height: 2;font-size: 16px;}
  strong{display: block;margin: 10px 0 5px;}
</style>
