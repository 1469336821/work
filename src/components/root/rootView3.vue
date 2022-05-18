<template>
  <div class="view3">
    <!-- 头部 -->
    <div class="nav">作业查询</div>
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
        <div class="toppart">
          <el-button @click="search" type="primary">查询</el-button>
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
          <p>发布老师</p>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      //作业名称
      value1: null,
      // 作业所属科目
      value2: null,
      // 老师姓名
      value3: null,
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
          value: "计算机组成原理",
          label: "计算机组成原理",
        },
        {
          value: "算法与数据结构",
          label: "算法与数据结构",
        },

        {
          value: "其他",
          label: "其他",
        },
      ],
      // 渲染数据
      // listarr: [],
      listarr: [],
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"])
  },
  mounted(){
    console.log(this.userInfo);
  },
  methods: {
    // 查询
    search(){
      console.log(this.value1);
      console.log(this.value2);
      console.log(this.value3);
      this.$axios({
        method:"POST",
        url:"/searchwork",
        data:{
          workName:this.value1,
          workSubject:this.value2,
          teacherName:this.value3
        }
      }).then((res)=>{
        console.log(res);
        this.listarr = res.data.data
      })
    }
  },
};
</script>
<style lang="less" scoped>
.view3 {
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

      .toppart {
        width: 200px;
        height: 50px;
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

          // &:last-child {
          //   color: #409dfe;
          // }
        }
      }
    }
  }
}
</style>
