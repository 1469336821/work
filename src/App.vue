<template>
  <div>
    <!-- 4.使用 -->
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>
<script>
//1.引入
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default {
  data() {
    return {};
  },
  //2.挂载
  components: {
    ElConfigProvider,
  },
  //3.设置
  setup() {
    return {
      locale: zhCn,
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style>
/* @import "assets/css/reset.css" */
@import url("assets/css/reset.css");
</style>
