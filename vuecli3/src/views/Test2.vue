<template>
    <div>
        <h1>子路由test2</h1>
        名字是：{{$route.params.xx}},
        年龄是：{{$route.params.age}}
    </div>
</template>

<script>
    export default {
        name: "Test2"
    }
</script>

<style scoped>

</style>