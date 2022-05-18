<template>
  <div class="view1">
    <!-- 头部 -->
    <div class="nav">作业提交管理</div>
    <!-- 主体 -->
    <div class="content">
      <!-- 列表部分 -->
      <div class="list">
        <!-- 列表表头 -->
        <div class="listheader">
          <p>作业名称</p>
          <p>所属科目</p>
          <p>发布时间</p>
          <p>截止时间</p>
          <p>老师姓名</p>
          <p>文件下载</p>
          <p>是/否提交</p>
          <p>文件上传</p>
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
          <p @click="download(item)" style="color: #409eff">下载</p>
          <p>
            {{ item.text }}
          </p>
          <p @click.capture="open(item)">
            <el-upload
              :action="baseURL + '/commitwork'"
              :limit="1"
              :with-credentials="true"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :show-file-list="false"
              :disabled="filebool"
            >
              <el-button type="primary" size="samll">上传文件</el-button>
            </el-upload>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 渲染数据
      listarr: [],
      // 文件数据
      workName: null,
      workSubject: null,
      startDate: null,
      endDate: null,
      teacherName: null,
      studentName: null,
      fileurl: null,
      //是否填写
      bool: false,
      // 是否禁用
      filebool: false,
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"]),
  },
  mounted() {
    this.search();
  },
  methods: {
    // 查询
    search() {
      console.log(this.value1);
      console.log(this.value2);
      console.log(this.value3);
      this.$axios({
        method: "POST",
        url: "/searchwork",
      }).then((res) => {
        console.log(res);
        this.listarr = res.data.data;
        this.listarr.forEach((item) => {
          item.bools = false;
          //commit查询渲染是否提交
          this.$axios({
            method: "POST",
            url: "/commitwork/search",
            data: {
              workName: item.workName,
              workSubject: item.workSubject,
              startDate: item.startDate,
              endDate: item.endDate,
              teacherName: item.teacherName,
              studentName: this.userInfo.user,
            },
          }).then((res) => {
            console.log(res);
            if (res.data.data) {
              item.text = "已填写";
              item.fileurl = res.data.data.fileurl;
            } else {
              item.text = "未填写";
            }
          });
        });
      });
    },
    // 文件上传点击
    open(m) {
      if (m.fileurl) {
        this.$message.success("您已经上传过了!");
        this.filebool = true;
      } else {
        this.workName = m.workName;
        this.workSubject = m.workSubject;
        this.startDate = m.startDate;
        this.endDate = m.endDate;
        this.teacherName = m.teacherName;
        this.studentName = this.userInfo.user;
      }
    },
    // 文件上传
    handleAvatarSuccess(res, file) {
      console.log(res, file);
      if (res.code == 200) {
        this.fileurl = res.data;
        this.$message.success("文件提交成功");
        //数据存到数据库
        //commit查询渲染是否提交
        this.$axios({
          method: "POST",
          url: "/commitwork/commit",
          data: {
            workName: this.workName,
            workSubject: this.workSubject,
            startDate: this.startDate,
            endDate: this.endDate,
            teacherName: this.teacherName,
            studentName: this.studentName,
            fileurl: this.fileurl,
          },
        }).then((res) => {
          console.log(res);
          this.search();
        });
      } else {
        this.$message.error("文件提交失败");
      }
    },
    // 下载文件
    download(m) {
      console.log(m);
      if (m.fileurl) {
        let itemurl = "http://localhost:5555" + m.fileurl;
        console.log(itemurl);
        window.open(itemurl, "_blank");
      } else {
        this.$message.error("你还未提交作业");
      }
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
    background-color: #0754f9;
  }
  //主体
  .content {
    width: 100%;
    min-height: 540px;

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
          height: 100px;
          text-align: center;
          line-height: 50px;
          font-size: 16px;

          &:nth-last-child(2) {
            color: red;

            &.green {
              color: green;
            }
          }
        }
      }
    }
  }
}
</style>
