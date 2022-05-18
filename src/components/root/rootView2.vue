<template>
  <div class="view1">
    <!-- 头部 -->
    <div class="nav">用户管理</div>
    <!-- 主体 -->
    <div class="content">
      <!-- 顶部部分 -->
      <div class="top">
        <!-- 所属科目 -->
        <div class="toppart">
          <el-select
            clearable="true"
            v-model="value1"
            placeholder="请选择用户身份"
            size="large"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <!-- 用户姓名 -->
        <div class="toppart">
          <el-input
            clearable="true"
            v-model="value2"
            placeholder="请输入用户账号"
          />
        </div>
        <!-- 查询 -->
        <div @click="search" class="toppart">
          <el-button type="primary">查询</el-button>
        </div>
      </div>
      <!-- 列表部分 -->
      <div class="list">
        <!-- 列表表头 -->
        <div class="listheader">
          <p>用户身份</p>
          <p>用户账号</p>
          <p>用户密码</p>
          <p>操作</p>
        </div>
        <!-- 列表内容 -->
        <div v-if="listarr.length < 1" class="bottom">暂无数据</div>
        <div v-else class="listcontent" v-for="(item, index) in listarr">
          <p>
            {{ item.identity }}
          </p>
          <p>
            {{ item.user }}
          </p>
          <p>
            {{ item.pass }}
          </p>
          <p>
            <span @click="update(item)">编辑</span>&nbsp;
            <span @click="remove(item)">删除</span>
          </p>
          <!-- 编辑 -->

          <div class="formlist" v-if="item.bools">
            <div class="mainlist">
              <!-- 标题 -->
              <el-row>
                <el-col>
                  <div class="wrap2">
                    <el-col :span="24">
                      <div class="wrap1-title">修改用户信息</div>
                    </el-col>
                    <el-col>
                      <div @click="updateclose(item)" class="close">X</div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>

              <!-- 用户身份 -->
              <el-row>
                <el-col>
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">用户身份</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 500px" class="title-input">
                        <el-input
                          v-model="item.identity"
                          clearable="true"
                          placeholder="请输入用户身份"
                        />
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
              <!-- 用户账号 -->
              <el-row>
                <el-col>
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">用户账号</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 500px" class="title-input">
                        <el-input
                          v-model="item.user"
                          clearable="true"
                          placeholder="请输入用户账号"
                        />
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>

              <!-- 用户密码 -->
              <el-row>
                <el-col>
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">用户密码</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 500px" class="title-input">
                        <el-input
                          v-model="item.pass"
                          clearable="true"
                          placeholder="请输入用户密码"
                        />
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>

              <!-- 按钮 -->
              <el-row>
                <el-col>
                  <div class="wrap2">
                    <el-col :span="12">
                      <div @click="updateclose(item)" class="addbtn">
                        <el-button>取消</el-button>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div @click="updatebtn(item)" class="addbtn">
                        <el-button type="primary">确定</el-button>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <!-- 新增 -->
      <el-row>
        <el-col>
          <div class="form" v-if="bool">
            <div class="main">
              <!-- 标题 -->
              <el-row>
                <el-col>
                  <div class="wrap1">
                    <el-col :span="24">
                      <div class="wrap1-title">发布作业信息</div>
                    </el-col>
                    <el-col>
                      <div @click="newclose()" class="close">X</div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
              <!-- 作业名称 -->
              <el-row>
                <el-col>
                  <div class="wrap1">
                    <el-col :span="4">
                      <div class="title">作业名称</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 660px" class="title-input">
                        <el-select
                          style="width: 660px"
                          clearable="true"
                          v-model="newvalue1"
                          placeholder="请选择作业名称"
                          size="large"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>

              <!-- 所属科目 -->
              <el-row>
                <el-col>
                  <div class="wrap1">
                    <el-col :span="4">
                      <div class="title">所属科目</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 660px" class="title-input">
                        <el-select
                          style="width: 660px"
                          clearable="true"
                          v-model="newvalue2"
                          placeholder="请选择作业所属科目"
                          size="large"
                        >
                          <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>

              <!-- 发布时间 -->
              <el-row>
                <el-col>
                  <div class="wrap1">
                    <el-col :span="4">
                      <div class="title">发布时间</div>
                    </el-col>
                    <el-col :span="20">
                      <!-- 开始时间 -->
                      <div class="datetime">
                        <el-date-picker
                          style="width: 99%"
                          clearable="true"
                          v-model="newvalue3"
                          value-format="YYYY-MM-DD"
                          type="date"
                          placeholder="开始时间"
                        />
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>

              <!-- 截止时间 -->
              <el-row>
                <el-col>
                  <div class="wrap1">
                    <el-col :span="4">
                      <div class="title">截止时间</div>
                    </el-col>
                    <el-col :span="20">
                      <!-- 开始时间 -->
                      <div class="datetime">
                        <el-date-picker
                          style="width: 99%"
                          clearable="true"
                          v-model="newvalue4"
                          value-format="YYYY-MM-DD"
                          type="date"
                          placeholder="截止时间"
                        />
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>

              <!-- 发布老师 -->
              <el-row>
                <el-col>
                  <div class="wrap1">
                    <el-col :span="4">
                      <div class="title">发布老师</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 660px" class="title-input">
                        <el-input
                          v-model="newvalue5"
                          clearable="true"
                          placeholder="请输入发布老师姓名"
                        />
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
              <!-- 按钮 -->
              <el-row>
                <el-col>
                  <div class="wrap1">
                    <el-col :span="12">
                      <div @click="reset()" class="addbtn">
                        <el-button>取消</el-button>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div @click="newbtn()" class="addbtn">
                        <el-button type="primary">确定</el-button>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //新增开关
      bool: false,
      // 编辑开关
      editor: false,
      // 用户身份
      value1: "",
      // 用户账号
      value2: "",
      // 渲染数据
      // listarr: [],
      listarr: [],
      // 作业名称下拉
      options: [
        {
          value: "学生",
          label: "学生",
        },
        {
          value: "教师",
          label: "教师",
        },
        {
          value: "root",
          label: "root",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    //查询
    search() {
      console.log(this.value);

      this.$axios({
        method: "POST",
        url: "/reg/search",
        data: {
          identity: this.value1,
          user: this.value2,
        },
      }).then((res) => {
        console.log(res);
        this.listarr = [];
        this.listarr = res.data.data;
        this.listarr.forEach((element) => {
          element.bools = false;
        });
      });
    },
    // 编辑
    update(m) {
      m.bools = true;
    },
    // 关闭
    updateclose(m) {
      m.bools = false;
    },
    // 修改提交
    updatebtn(m) {
      console.log(m);
      console.log(m.workName);
      this.$axios({
        method: "POST",
        url: "/reg/update",
        data: {
          user: m.user,
          pass: m.pass,
          identity: m.identity,
          _id: m._id,
        },
      }).then((res) => {
        console.log(res);
        this.$message.success(res.data.msg);
        this.search();
      });
    },
    // 删除
    remove(m) {
      this.$confirm("你确定删除文件?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(() => {
        this.$axios({
          method: "DELETE",
          url: "/reg/delete",
          data: {
            _id: m._id,
          },
        }).then((res) => {
          console.log(res);
          this.$message.success(res.data.msg);
          this.search();
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.view1 {
  width: 100%;
  min-height: 600px;
  background-color: #fff;

  //头部
  .nav {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 28px;
    color: #fff;
    background-color: #0754fa;
  }
  //主体
  .content {
    width: 100%;
    min-height: 540px;

    //顶部
    .top {
      width: 100%;
      height: 50px;
      margin-top: 20px;
      line-height: 50px;
      display: flex;

      .toppart {
        margin-left: 100px;
      }
    }

    //渲染列表
    .list {
      width: 100%;
      min-height: 500px;
      user-select: none;

      //表头
      .listheader {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        line-height: 50px;
        display: flex;
        align-content: center;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;

        p {
          width: 100px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          color: #909399;
          font-size: 18px;
          font-weight: bold;

          &.img {
            width: 50px;
            height: 50px;
            background: no-repeat center/cover;
          }
        }
      }
      //暂无数据
      .bottom {
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
      }
      //渲染内容
      .listcontent {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        line-height: 50px;
        display: flex;
        align-content: center;
        justify-content: space-around;

        p {
          width: 100px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 16px;

          &:last-child {
            color: #409eff;
          }
        }

        //编辑表单
        .formlist {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          // cursor: pointer;

          .mainlist {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 400px;
            padding: 10px 20px;
            background-color: #fff;

            .wrap2 {
              width: 100%;
              height: 40px;
              margin-top: 26px;
              display: flex;

              .title {
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 40px;
              }

              .title-input {
                flex: 1;
                width: 100%;
                height: 100%;
              }

              // 标题
              .wrap1-title {
                font-size: 30px;
                margin-top: -10px;
              }

              // 关闭
              .close {
                position: absolute;
                right: 0;
                top: 26px;
                width: 20px;
                height: 20px;
                cursor: pointer;

                &:hover {
                  color: blue;
                }
              }

              // 按钮
              .addbtn {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
