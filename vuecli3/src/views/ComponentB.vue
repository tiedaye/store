<template>
    <div>
        <h1>显示{{msg}} {{$store.state.count}}</h1>
        <!--这个b中msg的传值  是通过c的按钮调用a  a再传给b  即兄弟之间不能相互传值 -->
        <!--&lt;!&ndash;必须通过父元素  兄弟之间间接的相互影响&ndash;&gt;  vuex解决兄弟之间不能直接传值 -->
        <!--互相影响的问题-->
    </div>
</template>
<script>
    export default {
        props:['msg'],
        data(){
            return{

            }
        }
    }
</script>
<style>

</style>