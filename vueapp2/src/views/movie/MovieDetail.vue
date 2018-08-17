<template>
    <div v-if="show">
        <h3>电影名称：{{MovieDetail.title}}</h3>
        <div>
            <img :src="MovieDetail.images.small" alt="">
        </div>
        <p>id:{{MovieDetail.id}}</p>
        <p>简介：{{MovieDetail.summary}}</p>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data(){
            return{
                MovieDetail:{},
                show:false
            }
        },
        name: "MovieDetail",
        created(){
            var movieId = this.$route.params.id;
            Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieId).then(res=>{
                this.MovieDetail = res.data;
                this.show = true;
            });
            console.log(this.MovieDetail);
        }
    }
</script>

<style scoped>

</style>