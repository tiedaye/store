<template>
    <div>
        <ul>
            <Movie v-for="movie in movielist" :list="movie" @click.native="detail(movie)"></Movie>
        </ul>
            <div class="loading">
               <img src="../../assets/img/loading.gif" v-show="isShow" alt="">
                <div v-show="isEnd">我也是有底线的...</div>
            </div>
    </div>
</template>
<script>
    import Axios from 'axios'
    import Movie from '@/views/movie/MovieList.vue'
    //https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters
    export default {
        data(){
            return{
                movielist:[],
                isShow:false,
                isEnd:false
            }
        },
        created(){
            // Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters')
            //     .then((res)=>{
            //         this.movielist = res.data.subjects;
            //         console.log(this.movielist);
            //     });
            this.getData();
            window.onscroll=()=>{
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var clientHeight = document.documentElement.clientHeight;
                // console.log(scrollTop,scrollHeight,clientHeight);
                if(scrollTop + clientHeight + 1 > scrollHeight && !this.isEnd){
                    this.isShow = true;
                    this.getData();
                }
            }

        },
        methods:{
            detail(movieobj){
                console.log(1111);
                this.$router.push('/moviedetail/'+ movieobj.id);
            },
            getData(){
                // Axios.get('/movie.json')
                //     .then(res=>{
                //         var arr = res.data.subjects.slice(this.movielist.length,this.movielist.length + 5);
                //         this.movielist = [...this.movielist,...arr];
                //        if(arr.length < 5){
                //            this.isEnd = true;
                //            this.isShow = false;
                //        }
                // });

                Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movielist.length+'&count=5')
                    .then((res)=>{
                          this.movielist = [...this.movielist,...res.data.subjects];
                               if(res.data.subjects.length < 5){
                                   this.isEnd = true;
                                   this.isShow = false;
                               }
                        })

                     }
                 },
        components:{
            Movie
        }
    }
</script>
<style lang="scss" scoped>
     .loading{
        text-align: center;
      }
</style>