<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">Mine</router-link> |
      <router-link to="/myhome">MyHome</router-link>|
      <router-link :to="{name:'test1',params:{name:'zhaoliu',age:18}}">子路由1</router-link> |
      <router-link to="/myhome/test2/wangwu/16">子路由2</router-link>|
      <router-link to="/sssss">重定向</router-link> |
      <router-link to="/sssss/zhouba/20">重定向参数</router-link> |
      <router-link to="/xiaoming">别名</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
