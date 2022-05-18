<template>
  <!-- 页面 -->
  <div class="home">
    <!-- 主体内容 -->
    <div class="content">
      <!-- 左边图片 -->
      <div class="left"></div>
      <!-- 右边表单 -->
      <div class="right">
        <div class="title">学生电子作业提交系统</div>
        <!-- 上面表单 -->
        <div class="main" @click.stop>
          <!-- 表单 -->
          <el-tabs v-model="activeName">
            <!-- 注册账号 -->
            <el-tab-pane label="注册账号" name="first">
              <el-form
                :model="regForm"
                status-icon
                :rules="rules"
                ref="regForm"
                label-width="80px"
                @keydown.enter="regSubmit"
              >
                <!-- 账号 -->
                <el-form-item label="输入账号" prop="user" label-width="80px">
                  <el-input
                    v-model="regForm.user"
                    clearable="true"
                    placeholder="请输入2~10位的用户名"
                  />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="输入密码" prop="pass" label-width="80px">
                  <el-input
                    type="password"
                    clearable="true"
                    v-model="regForm.pass"
                    placeholder="请输入6~16位"
                  />
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item label="确认密码" prop="pass2" label-width="80px">
                  <el-input
                    type="password"
                    clearable="true"
                    v-model="regForm.pass2"
                    placeholder="请输入6~16位"
                  />
                </el-form-item>
                <!-- 选择身份 -->
                <el-form-item label="选择身份" label-width="80px">
                  <el-select
                    @change="changecode"
                    style="width: 320px"
                    clearable="true"
                    v-model="identity"
                    placeholder="请选择身份"
                    size="large"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
                <!-- 注册按钮 -->
                <el-form-item label-width="120px">
                  <el-button
                    style="width: 200px"
                    type="primary"
                    @click="regSubmit"
                    >立即注册</el-button
                  >
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <!-- 学生登录 -->
            <el-tab-pane label="学生登录" name="second">
              <el-form
                :model="loginForm"
                status-icon
                :rules="rules"
                ref="loginForm"
                label-width="80px"
                @keydown.enter="loginSubmit"
              >
                <!-- 账号 -->
                <el-form-item
                  style="margin-top: 40px"
                  label="学生账号"
                  prop="user"
                  label-width="80px"
                >
                  <el-input
                    clearable="true"
                    v-model="loginForm.user"
                    placeholder="请输入2~6位"
                  />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item
                  style="margin-top: 40px"
                  label="账号密码"
                  prop="pass"
                  label-width="80px"
                >
                  <el-input
                    type="password"
                    clearable="true"
                    v-model="loginForm.pass"
                    placeholder="请输入6~16位"
                  />
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item style="margin-top: 40px" label-width="120px">
                  <el-button
                    style="width: 200px"
                    type="primary"
                    @click="loginSubmit"
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <!-- 教师登录 -->
            <el-tab-pane label="教师登录" name="third">
              <el-form
                :model="loginForm"
                status-icon
                :rules="rules"
                ref="loginForm"
                label-width="80px"
                @keydown.enter="loginSubmit"
              >
                <!-- 账号 -->
                <el-form-item
                  style="margin-top: 40px"
                  label="教师账号"
                  prop="user"
                  label-width="80px"
                >
                  <el-input
                    clearable="true"
                    v-model="loginForm.user"
                    placeholder="请输入2~6位"
                  />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item
                  style="margin-top: 40px"
                  label="账号密码"
                  prop="pass"
                  label-width="80px"
                >
                  <el-input
                    type="password"
                    clearable="true"
                    v-model="loginForm.pass"
                    placeholder="请输入6~16位"
                  />
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item style="margin-top: 40px" label-width="120px">
                  <el-button
                    style="width: 200px"
                    type="primary"
                    @click="loginSubmit"
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <!-- Root登录 -->
            <el-tab-pane
              style="margin-top: 40px"
              label="root登录"
              name="fourth"
            >
              <el-form
                :model="loginForm"
                status-icon
                :rules="rules"
                ref="loginForm"
                label-width="80px"
                @keydown.enter="loginSubmit"
              >
                <!-- 账号 -->
                <el-form-item
                  style="margin-top: 40px"
                  label="管理账号"
                  prop="user"
                  label-width="80px"
                >
                  <el-input
                    clearable="true"
                    v-model="loginForm.user"
                    placeholder="请输入2~6位"
                  />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item
                  style="margin-top: 40px"
                  label="账号密码"
                  prop="pass"
                  label-width="80px"
                >
                  <el-input
                    clearable="true"
                    type="password"
                    v-model="loginForm.pass"
                    placeholder="请输入6~16位"
                  />
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item style="margin-top: 40px" label-width="120px">
                  <el-button
                    style="width: 200px"
                    type="primary"
                    @click="loginSubmit"
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 登录身份
      logininfo: null,
      // 身份选择
      identity: null,
      options: ["学生", "教师", "root"],
      // 单选按钮
      radio: 3,
      // 表单默认首选
      activeName: "first",
      //  activeName: "second",
      //注册表单数据
      regForm: {
        user: "",
        pass: "",
        pass2: "",
      },
      //登录表单数据
      loginForm: {
        user: "",
        pass: "",
      },
      //表单字段规则
      rules: {
        // 账号验证
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            validator(rule, value, cb) {
              //长度验证
              if (value.length < 2 || value.length > 10) {
                cb(new Error("请输入2~10位的用户名"));
              }
              //规则验证
              if (
                !/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]+$/.test(value)
              ) {
                cb(new Error("只允许 数字 字母 _ 中/日/韩文"));
              }
              cb();
            },
          },
        ],
        // 密码验证
        pass: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            validator(rule, value, cb) {
              //长度验证
              if (value.length < 6 || value.length > 16) {
                cb(new Error("请输入6~16位的密码"));
              }
              //规则验证
              if (!/^[\w\[\]\/\\~`|<>,.?;':"{}!@#$%^&*()_+=-]+$/.test(value)) {
                cb(new Error("不允许的密码字符"));
              }
              cb();
            },
          },
        ],
        // 确认密码验证
        pass2: [
          {
            required: true,
            message: "请确认密码",
            trigger: "blur",
          },
          {
            validator: (rule, value, cb) => {
              // 二次验证
              if (value !== this.regForm.pass) {
                cb(new Error("两次输入密码不一致"));
              }
              cb();
            },
          },
        ],
      },
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapMutations(["loginSuccess"]),
    // 选择身份
    changecode() {
      console.log(this.identity);
    },
    // 按钮点击
    changeradio(e) {
      this.radio = e;
      console.log(this.regForm.user);
      console.log(this.regForm.pass);
      console.log(this.regForm.pass2);
      console.log(e);
    },
    //注册提交
    regSubmit() {
      this.$refs.regForm.validate(async () => {
        //发送请求
        await this.$axios({
          method: "POST",
          url: "/reg",
          data: {
            identity: this.identity,
            user: this.regForm.user,
            pass: this.regForm.pass,
          },
        })
          .then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              //注册成功
              this.$message.success("注册成功，即将切换到登录");
              //切换到登录
              if (this.identity == "学生") {
                this.activeName = "second";
              } else if (this.identity == "教师") {
                this.activeName = "third";
              } else if (this.identity == "root") {
                this.activeName = "fourth";
              }
              //清空表单数据
              this.$refs.regForm.resetFields();
              this.identity = "";
            } else {
              //注册失败
              this.$message.error(res.data.msg);
              //清空表单数据
              this.$refs.regForm.resetFields();
              this.identity = "";
            }
          })
          .catch(() => {
            //注册失败
            this.$message.error("注册失败");
            //清空表单数据
            this.$refs.regForm.resetFields();
            this.identity = "";
          });
      });
    },
    //登录提交
    loginSubmit() {
      console.log(this.activeName);

      this.$refs.loginForm.validate(async () => {
        await this.$axios({
          method: "POST",
          url: "/login",
          data: this.loginForm,
        })
          .then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              let i = res.data.data.identity;
              //登录成功
              this.$message.success("登录成功"); //弹窗

              //身份验证
              //切换到对应的页面
              if (this.activeName == "second" && i == "学生") {
                this.$router.push("/student");
                //数据存到vuex
                this.loginSuccess(res.data.data);
              } else if (this.activeName == "third" && i == "教师") {
                this.$router.push("/teacher");
                //数据存到vuex
                this.loginSuccess(res.data.data);
              } else if (this.activeName == "fourth" && i == "root") {
                this.$router.push("/root");
                //数据存到vuex
                this.loginSuccess(res.data.data);
              } else {
                this.$message.error("身份信息不正确");
              }
              // store.dispatch('updateInfoAsync','修改后的值')
              //清空登录框数据
              // this.$refs.loginForm.resetFields();
            } else {
              //登录失败
              this.$refs.loginForm.resetFields(); //清空登录框数据
              this.$message.error(res.data.msg); //弹窗
            }
          })
          .catch(() => {
            //登录失败
            if (res.data.code) {
              return this.$message.error(res.data.msg);
            }
          });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  border-top: 1px solid #fff;
  user-select: none;
  // background-color: red;

  .content {
    width: 1400px;
    height: 600px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-content: space-around;
    // background-color: red;

    .left {
      width: 600px;
      height: 600px;
      background-color: pink;
      background: url("../assets/img/bg.png") no-repeat center/cover;
    }

    .right {
      margin-left: 100px;
      margin-top: 100px;
      padding: 40px;
      width: 400px;
      height: 420px;
      // background-color: green;
      box-shadow: 0 0 4px #ddd;

      .title {
        width: 100%;
        height: 40px;
        font-size: 30px;
        text-align: center;
        margin-bottom: 40px;
        color: #409eff;
      }
    }
  }
}
</style>
