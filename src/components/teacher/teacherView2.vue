<template>
  <div class="view1">
    <!-- 头部 -->
    <div class="nav">作业发布</div>
    <!-- 主体 -->
    <div class="content">
      <!-- 顶部部分 -->
      <div class="top">
        <!-- 新增 -->
        <div @click="addwork" class="toppart">
          <el-button type="primary">新增</el-button>
        </div>
        <!-- 作业名称 -->
        <div class="toppart">
          <el-select
            clearable="true"
            v-model="value1"
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
        <!-- 所属科目 -->
        <div class="toppart">
          <el-select
            clearable="true"
            v-model="value2"
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
        <!-- 老师姓名 -->
        <div class="toppart">
          <el-input
            clearable="true"
            v-model="value3"
            placeholder="请输入老师姓名"
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
          <p>作业名称</p>
          <p>所属科目</p>
          <p>发布时间</p>
          <p>截止时间</p>
          <p>老师姓名</p>
          <p>操作</p>
        </div>
        <!-- 列表内容 -->
        <div v-if="listarr.length < 1" class="bottom">暂无数据</div>
        <div v-else class="listcontent" v-for="(item, index) in listarr">
          <p>
            {{ item.workName }}
          </p>
          <p>
            {{ item.workSubject }}
          </p>
          <p>
            {{ item.startDate }}
          </p>
          <p>
            {{ item.endDate }}
          </p>
          <p>
            {{ item.teacherName }}
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
                      <div class="wrap1-title">修改作业信息</div>
                    </el-col>
                    <el-col>
                      <div @click="updateclose(item)" class="close">X</div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
              <!-- 作业名称 -->
              <el-row>
                <el-col>
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">作业名称</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 660px" class="title-input">
                        <el-select
                          style="width: 660px"
                          clearable="true"
                          v-model="item.workName"
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
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">所属科目</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 660px" class="title-input">
                        <el-select
                          style="width: 660px"
                          clearable="true"
                          v-model="item.workSubject"
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
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">发布时间</div>
                    </el-col>
                    <el-col :span="20">
                      <!-- 开始时间 -->
                      <div class="datetime">
                        <el-date-picker
                          style="width: 99%"
                          clearable="true"
                          v-model="item.startDate"
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
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">截止时间</div>
                    </el-col>
                    <el-col :span="20">
                      <!-- 开始时间 -->
                      <div class="datetime">
                        <el-date-picker
                          style="width: 99%"
                          clearable="true"
                          v-model="item.endDate"
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
                  <div class="wrap2">
                    <el-col :span="4">
                      <div class="title">发布老师</div>
                    </el-col>
                    <el-col :span="20">
                      <div style="width: 660px" class="title-input">
                        <el-input
                          v-model="item.teacherName"
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
      //新增数据
      newvalue1: null,
      newvalue2: null,
      newvalue3: null,
      newvalue4: null,
      newvalue5: null,
      //作业名称
      value1: "",
      //作业科目
      value2: "",
      // 老师姓名
      value3: "",
      // 渲染数据
      // listarr: [],
      listarr: [],
      // 作业名称下拉
      options: [
        {
          value: "平时作业",
          label: "平时作业",
        },
        {
          value: "平时测试",
          label: "平时测试",
        },
        {
          value: "期中测试",
          label: "期中测试",
        },
        {
          value: "期末测试",
          label: "期末测试",
        },
        {
          value: "其他",
          label: "其他",
        },
      ],
      // 作业所属科目
      options1: [
        {
          value: "高等数学",
          label: "高等数学",
        },
        {
          value: "线性代数",
          label: "线性代数",
        },
        {
          value: "离散数学",
          label: "离散数学",
        },
        {
          value: "编译原理",
          label: "编译原理",
        },
        {
          value: "操作系统原理",
          label: "操作系统原理",
        },
        {
          value: "网页设计",
          label: "网页设计",
        },
        {
          value: "数据结构",
          label: "数据结构",
        },

        {
          value: "其他",
          label: "其他",
        },
      ],
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.search()
  },
  methods: {
    //新增发布作业信息
    addwork() {
      this.bool = true;
    },
    //关闭
    newclose() {
      this.bool = false;
    },
    //提交
    newbtn() {
      if (!this.newvalue1) {
        this.$message.error("请输入完整的信息");
      } else if (!this.newvalue2) {
        this.$message.error("请输入完整的信息");
      } else if (!this.newvalue3) {
        this.$message.error("请输入完整的信息");
      } else if (!this.newvalue4) {
        this.$message.error("请输入完整的信息");
      } else if (!this.newvalue5) {
        this.$message.error("请输入完整的信息");
      } else {
        this.$axios({
          method: "POST",
          url: "/addwork",
          data: {
            workName: this.newvalue1,
            workSubject: this.newvalue2,
            startDate: this.newvalue3,
            endDate: this.newvalue4,
            teacherName: this.newvalue5,
          },
        })
          .then((res) => {
            console.log(res);
            this.$message.success("作业发布成功");
            this.reset();
            this.bool = false;
            this.search();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    //重置
    reset() {
      this.newvalue1 = "";
      this.newvalue2 = "";
      this.newvalue3 = "";
      this.newvalue4 = "";
      this.newvalue5 = "";
    },
    //查询
    search() {
      console.log(this.value1);
      console.log(this.value2);
      console.log(this.value3);

      this.$axios({
        method: "POST",
        url: "/searchwork",
        data: {
          workName: this.value1,
          workSubject: this.value2,
          teacherName: this.value3,
        },
      }).then((res) => {
        console.log(res);
        this.listarr = [];
        this.listarr = res.data.data;
        this.listarr.forEach((element) => {
          element.text = "详情";
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
        url: "/update",
        data: {
          workName: m.workName,
          workSubject: m.workSubject,
          startDate: m.startDate,
          endDate: m.endDate,
          teacherName: m.teacherName,
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
      this.$axios({
        method: "DELETE",
        url: "/remove",
        data: {
          _id: m._id,
        },
      }).then((res) => {
        console.log(res);
        this.$message.success(res.data.msg)
        this.search()
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
    background-color: #0754FA;
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
      align-content: center;
      justify-content: space-around;

      // .toppart {
      //   width: 300px;
      //   height: 50px;
      //   background-color: pink;
      // }
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
            width: 800px;
            height: 560px;
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

    //新增表单
    .form {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;

      .main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 560px;
        padding: 10px 20px;
        background-color: #fff;

        .wrap1 {
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
</style>
