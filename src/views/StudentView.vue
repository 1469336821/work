<template>
  <div class="student">
    <!-- 导航 -->
    <div class="nav">
      <!-- 账号 -->
      <div class="info">欢迎学生: {{ userInfo.user }}</div>
      <!-- 标题 -->
      <div class="title">学生电子作业提交系统</div>
      <!-- 头像 -->
      <div class="photo">
        <div
          class="img"
          :style="{
            backgroundImage: `url(${baseURL}${userInfo.photo}${random})`,
          }"
          :title="userInfo.user"
        ></div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="content">
      <!-- 左边侧边栏 -->
      <div class="left">
        <div @click="jump1()" class="left-title" :class="{ bg: bool1 }">
          <div class="icon">
            <el-icon :size="20"><expand /></el-icon>
          </div>
          <div class="text">
            <a>首页</a>
          </div>
        </div>
        <div @click="jump2()" class="left-title" :class="{ bg: bool2 }">
          <div class="icon">
            <el-icon :size="20"><ZoomOut /></el-icon>
          </div>
          <div class="text">
            <a>作业查询</a>
          </div>
        </div>
        <div @click="jump3()" class="left-title" :class="{ bg: bool3 }">
          <div class="icon">
            <el-icon :size="20"><files /></el-icon>
          </div>
          <div class="text">
            <a>作业提交</a>
          </div>
        </div>
        <div @click="jump4()" class="left-title" :class="{ bg: bool4 }">
          <div class="icon">
            <el-icon :size="20"><avatar /></el-icon>
          </div>
          <div class="text">
            <a>修改信息</a>
          </div>
        </div>
        <div @click="jump5()" class="left-title">
          <div class="icon">
            <el-icon :size="20"><tools /></el-icon>
          </div>
          <div class="text">
            <a>退出登录</a>
          </div>
        </div>
      </div>
      <!-- 右边主要对应内容 -->
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      //bg背景颜色
      bool1: false,
      bool2: false,
      bool3: false,
      bool4: false,
      // 头像
      random: `?_=${Date.now()}`,
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"]),
  },
  watch: {
    userInfo() {
      this.random = `?_=${Date.now()}`;
    },
  },
  mounted() {
    this.backHome();
  },
  methods: {
    //未登录情况下，返回首页
    backHome() {
      if (!this.userInfo.photo) {
        this.$message.error("当前未登录，已自动返回首页");
        this.$router.replace("/");
      }
    },
    ...mapMutations(["loginOut"]),
    //清除样式
    clear() {
      this.bool1 = false;
      this.bool2 = false;
      this.bool3 = false;
      this.bool4 = false;
    },
    //首页
    jump1() {
      this.$router.push("/student/");
      this.clear();
      this.bool1 = true;
    },
    //作业查询
    jump2() {
      this.$router.push("/student/view2");
      this.clear();
      this.bool2 = true;
    },
    //作业提交
    jump3() {
      this.$router.push("/student/view3");
      this.clear();
      this.bool3 = true;
    },
    //修改信息
    jump4() {
      this.$router.push("/student/view4");
      this.clear();
      this.bool4 = true;
    },
    //退出登录
    jump5() {
      this.$confirm("你确定退出登录?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(() => {
        this.$axios({
          method: "POST",
          url: "/login/out",
        }).then((res) => {
          if (res.data.dat) return;
          //退出登录成功,清空vuex
          this.$message.success("已退出登录");
          this.loginOut();
          this.$router.replace("/");
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.student {
  width: 100%;
  border-top: 1px solid transparent;
  min-height: 800px;
  background: url("../assets/img/bg/bg-left.png") no-repeat 0 50px fixed,
    url("../assets/img/bg/bg-right.png") no-repeat right 50px fixed;
  background-color: #f2f2f2;

  // 导航
  .nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 2px 4px #999;
    display: flex;

    //标题
    .title {
      flex: 1;
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      //   background-color: yellow;
    }

    //信息
    .info {
      width: 300px;
      height: 60px;
      text-align: right;
      line-height: 60px;
      color: #49a1ea;
      font-size: 20px;
      //   background-color: red;
    }

    //头像
    .photo {
      width: 100px;
      height: 60px;
      // background-color: green;

      //头像
      .img {
        margin: 5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: no-repeat center/cover;
      }
    }
  }

  // 主体
  .content {
    width: 100%;
    min-height: 640px;

    // 侧边栏
    .left {
      position: fixed;
      left: 0px;
      top: 62px;
      width: 200px;
      height: 800px;
      background-color: #409eff;

      //侧边导航
      .left-title {
        width: 100%;
        height: 50px;
        padding: 10px 0;
        text-align: left;
        line-height: 50px;
        font-size: 20px;
        display: flex;
        cursor: pointer;
        user-select: none;
        border-bottom: 1px solid #fff;

        &.bg {
          background-color: #0754fa;
        }
        &:hover {
          background-color: #0754fa;
        }

        // icon图标
        .icon {
          margin-top: 6px;
          margin-left: 6px;
          width: 30px;
          height: 30px;
          color: #fff;
        }
        // text文字
        .text {
          flex: 1;
          width: 100%;
          height: 50px;
          line-height: 50px;

          a {
            color: #fff;
          }
        }
      }
    }
    // 右边展示内容
    .right {
      margin-top: 80px;
      margin-left: 248px;
      width: 82%;
      min-height: 1000px;
      border-radius: 15px 15px 0 0;
      border-top: 1px solid transparent;
      //   background-color: red;
    }
  }
}
</style>
