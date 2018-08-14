<template>
    <div>
        <h1>
            welcome
        </h1>
        <router-link :to="{name:'test1',params:{name:'zhangsan',age:13}}">子路由1</router-link> |
        <router-link to="/myhome/test2/lisi/15">子路由2</router-link>
        <router-view></router-view>
    </div>

</template>

<script>

</script>

<style>

</style>