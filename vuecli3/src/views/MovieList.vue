<template>
    <ul>
        <li v-for="val in list" @click="click(val.id)">
            <!--<router-link :to="'/moviedetail/'+val.id">-->
                {{val.name}},{{val.grade}}
            <!--</router-link>-->
        </li>
    </ul>
</template>
<script>
    export  default {
        data(){
            return{
                    list:[
                            {
                                name:'西红柿首富',
                                grade:8.7,
                                id:111
                            },
                            {
                                name:'爱情公寓',
                                grade:6.0,
                                id:222
                            },
                            {
                                name:'巨齿鲨',
                                grade:9.7,
                                id:333
                            }
                        ]
                    }
             },
        methods:{
            click(id){
                return this.$router.push('/moviedetail/'+id);
            }
        }
    }
</script>
<style>

</style>