<template>
  <div class="container">
<!--    视频背景-->
    <video class="video" src="../assets/video/bac.mp4" preload="auto" loop playsinline autoplay tabindex="-1" muted="muted"></video>
<!--    logo-->
    <div class="logo">

    </div>
<!--    登陆框-->
    <div class="logBox">

      <div class="header">
        报名审核系统
      </div>

      <div class="input">
        <!--      账号-->
          <el-input
              clearable
              placeholder="请输入内容"
              v-model="account">
            <template slot="prepend">账号</template>
          </el-input>

        <!--      密码-->
        <el-input
            class="password"
            placeholder="请输入密码"
            v-model="password"
            clearable
            show-password>
          <template slot="prepend">密码</template>
        </el-input>
      </div>

      <div class="login_btn">
        <el-button type="primary" style="width: 30%;" @click="login_page">登陆</el-button>
        <el-button type="primary" style="width: 30%;">注册</el-button>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "logIn",
  data(){
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    //登陆判断函数
    login_page:function() {
      this.global.login_func(this.account, this.password).then(() => {
        this.$notify({
          type: 'success',
          message: '登陆成功',
          title: '消息提示'
        })
        this.$router.push({
          name: 'auditPage',
          query: {
            account: this.account,
            password: this.password,
          }
        })
      }).catch(rej => {
        if(rej === 2){
          this.$notify({
            type: 'error',
            title: '消息提示',
            message: '密码错误',
          })
        }else if(rej === 3) {
          this.$notify({
            type: 'error',
            title: '消息提示',
            message: '账号不存在',
          })
        }else if(rej === 4) {
          this.$notify({
            type: 'error',
            title: '消息提示',
            message: '账号或密码未填写',
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.video {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 800px;
}
.logBox {
  background: rgba(255, 255, 255, 0.4);
  height: 45%;
  width: 42vmax;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 10px;
}
.input {
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.password {
  margin-top: 20px;
}
.logo {
  height: 20%;
  width: 43vmax;
  background: url("../assets/images/header.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
}
.header {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Microsoft YaHei",serif;
  font-size: 3vmax;
  width: 100%;
}
.login_btn {
  position: absolute;
  top: 76%;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 100%;
}

</style>
