<template>
    <div>
        <aplayer autoplay listMaxHeight='50' showLrc="true" theme="pink" :music="musicList[0]" :list="musicList" v-if="isShow">

        </aplayer>
    </div>

</template>

<script>
    import Aplayer from 'vue-aplayer';
    import Axios from 'axios'
    export default {
        data(){
            return{
                musicList:[],
                isShow:false
            }
        },
        name: "Music",
        components:{
            Aplayer
        },
        created(){
            Axios.get('/data/musicdata.json').then(res=>{
                res.data.musicData.forEach((elem)=>{
                    var data = {};
                    data.title = elem.title;
                    data.artist = elem.author;
                    data.src = elem.src;
                    data.pic = elem.musicImgSrc;
                    data.lrc = '/public/'+elem.lrc;
                    this.musicList.push(data);
                });
                this.isShow = true;
            })
        }
    }
</script>

<style scoped>

</style>