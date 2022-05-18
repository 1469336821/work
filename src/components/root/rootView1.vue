<template>
  <div class="view1">
    <!-- 头部 -->
    <div class="nav">首页</div>
    <!-- 主体 -->
    <div class="content">欢迎来到学生电子作业提交系统 ———— 管理员端</div>
    <div id="about">
      <article>
        <h2>系统功能简介</h2>
        <p>管理员端: 主要是为管理员进行用户信息管理与作业信息管理!</p>
        <p>
          本系统在管理员端可以进行用户信息查看/作业信息查看/个人信息修改/以及退出登录等功能。
        </p>
        <p>如果你们对本系统有什么修改建议的话,可以及时联系我哦! 联系方式 QQ: 1469336821(李)</p>
      </article>
      <article>
        <h2>系统技术简介</h2>
        <p class="code"><code>前 &nbsp;端：</code><span>Vue + Element</span></p>
        <p class="code">
          <code>后 &nbsp;端：</code><span>Node+ Cors + Express + Mongodb</span>
        </p>
        <!-- <p class="border">
          <code>服务器：</code
          ><a
            href="https://www.aliyun.com/1111/new?userCode=xqfx5ty6"
            target="_blank"
            >阿里云ECS</a
          >
        </p>
        <p>这个作业提交系统是我2022年的大学毕业设计系统,终于在2022年5月10号上线了！我真棒！😂</p>
        <p>
          这不能怪我...真的...每当我好不容易挤点时间写好代码准备上线时，总感觉自己还有好多不会...、Node、Vue、Mongodb...我也很绝望啊，每次都是哪里不会补哪里，裂开...
        </p> -->
      </article>
      <article>
        <h2>其他</h2>
        <p>
          我是一名前端开发者，也是一名前端技术学习者（2020年开始在线自学），如果有合作相关事宜的话，可以通过
          <a href="#">QQ:1469336821</a>
          联系我。
        </p>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.view1 {
  width: 100%;
  min-height: 600px;
  // background-color: #fff;

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
    height: 80px;
    margin-bottom: 15px;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
    background-color: #fff;
  }

  #about {
    article {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 15px;
      box-shadow: 0 0 4px #ddd;
      padding: 25px 20px;
      background-color: #fff;
      font-family: Quicksand, Microsoft YaHei, sans-serif;
      h2 {
        margin-bottom: 15px;
        font-size: 20px;
        letter-spacing: 3px;
        line-height: 24px;
        border-left: 5px solid #409eff;
        text-indent: 10px;
      }
      p {
        text-indent: 2em;
        color: #444;
        font-size: 14px;
        letter-spacing: 4px;
        line-height: 30px;
        code {
          font-family: Quicksand, Microsoft YaHei, sans-serif;
          letter-spacing: 4px;
        }
        a {
          color: #409eff;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      p.code span {
        color: #bd4147;
        background-color: rgba(27, 31, 35, 0.05);
        font-weight: 700;
      }
      p.border {
        border-bottom: 1px dotted rgb(170, 170, 170);
      }
    }
  }
}
</style>
