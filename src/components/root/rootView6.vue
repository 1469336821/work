<template>
  <div class="view6">
    <!-- 头部 -->
    <div class="nav">已交作业</div>
    <!-- 主体 -->
    <div class="content">
      <!-- 顶部部分 -->
      <div class="top">
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
          <p>发布教师</p>
          <p>学生姓名</p>
          <p>文件下载</p>
          <p>删除文件</p>
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
            {{ item.studentName }}
          </p>
          <p @click="download(item)">
            {{ item.text }}
          </p>
          <p @click="del(item)">
            {{ item.delete }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    this.search();
  },
  methods: {
    //查询
    search() {
      console.log(this.value1);
      console.log(this.value2);
      console.log(this.value3);

      this.$axios({
        method: "POST",
        url: "/commitwork/finished",
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
          if (element.fileurl) {
            element.text = "下载";
            element.delete = "删除";
          }
        });
      });
    },
    // 下载文件
    download(m) {
      console.log(m);
      let itemurl = "http://localhost:5555" + m.fileurl;
      console.log(itemurl);
      window.open(itemurl, "_blank");
    },
    // 删除文件
    del(m) {
      this.$confirm("你确定删除文件?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(()=>{
        console.log(m);
        this.$axios({
          method:"DELETE",
          url:"/commitwork/delete",
          data:{
            _id:m._id
          }
        }).then((res)=>{
          console.log(res);
          this.search()
          this.$message.success("删除成功")
        })
      })
    },
  },
};
</script>
<style lang="less" scoped>
.view6 {
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

          &:nth-last-child(2) {
            color: #409eff;
          }

          &:last-child {
            color: red;
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
