<template lang="html">
  <div class="explain">
      <h1>Gaid:</h1>
      <h3>安装：</h3>
      <p>npm install element-ui@next -S</p>
      <h3>使用：</h3>
      <p>
        全局:<br>
        import Vue from 'vue'  <br>	
        import Element from 'element-ui' <br>
        import 'element-ui/lib/theme-default/index.css' <br>

        Vue.use(Element)
      </p>
      <p>
        按需加载:<br>
        import { Select,Button } from 'element-ui' <br>

        Vue.component(Select.name, Select) <br>
        Vue.component(Button.name, Button) <br>
      </p>
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
</style>
