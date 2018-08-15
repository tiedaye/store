<template>
    <div>
        <h1>我是componentA页面</h1>
        <component-b :msg="xx"></component-b>
        <component-c @changed="changed"></component-c>
        {{xx}}
    </div>
</template>
<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from './ComponentC.vue';
    export default {
            data(){
                return{
                    xx:0
                }
            },
            components:{
                ComponentB,
                ComponentC
            },
            methods:{
                changed(a){
                    this.xx +=a;
                }
            }

    }
</script>
<style>

</style>