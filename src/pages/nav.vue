<template lang="html">
  <div class="nav">
    <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened theme="dark" @open="handleopen" @close="handleclose">
      <el-submenu :index="index" v-for="(item, index) of navData">
        <template slot="title">{{item.title}}</template>
        <el-menu-item :index="index + '-' + subIndex" class="index" v-for="(list, subIndex) of item.cont"><a :href="'#' + list">{{list}}</a></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data() {
    return {
      navData: [{
        'title': 'Basic',
        'cont': ["layout"]
      },{
        'title': 'Form',
        'cont': ["button", "radio", "checkbox", "input", "select", "switch", "slider", "datePicker",]
      },{
        'title': 'Data',
        'cont': ["table", "tag", "badge", "progress", "tree",]
      },{
        'title': 'Nav',
        'cont': ["navMenu", "tabs", "breadcrumb", "dropdown", "steps",]
      },{
        'title': 'Others',
        'cont': ["dialog", "tooltips", "popover", "card"]
      }]
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleopen(){

    },
    handleclose(){

    }
  },
  components: {}
};
</script>

<style lang="css">
.nav{
  position: fixed;
  right: 20px;
  top:20px;
  width: 300px;
  z-index: 99999;
}
.nav a{
  display: block;
  color: #ccc;
  text-decoration: none;
}
</style>
