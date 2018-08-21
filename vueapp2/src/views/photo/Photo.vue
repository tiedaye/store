<template>
    <div>
        <router-link v-for="(val,index) in photoList" :to="'/photodetail/' + index">
            <img  :src="val.src" alt="">
        </router-link>

    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return{
                photoList:[]
            }
        },
        name: "photo",
        created(){
            Axios.get('data/photodata.json').then(res=>{
                this.photoList = res.data.photoData;
            })

        }
    }
</script>

<style scoped lang="scss">
    img{
        width: 50%;
    }
</style>