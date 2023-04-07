<template>
  <h1>欢迎你{{account}},你的密码是{{password}},这是审核页面</h1>
</template>

<script>
export default {
  name: "auditPage",
  data(){
    return {
      account: this.$route.query.account,
      password: this.$route.query.password,
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
