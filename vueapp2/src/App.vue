<template>
  <div id="app">
      <CHeader></CHeader>
    <CHeader :Color="bgColor" :tit="title"></CHeader>
       <router-view class="content"/>
      <Cfooter :list="list"></Cfooter>
    <!--<Cfooter :list="list" @changfather="xx"></Cfooter>-->
  </div>
</template>
<script>
    import CHeader from'@/components/CHeader';
    import Cfooter from'@/components/Cfooter'
  export default {
        data(){
            return{
                bgColor:'rgb(33, 150, 243)',
                title:'movie',
                    list:[
                            {
                                name:'电影',
                                path:'/movie',
                                bgColor:'rgb(33, 150, 243)',
                                title:'Movie'
                            },
                            {
                                name:'音乐',
                                path:'/music',
                                bgColor:'rgb(0, 150, 136)',
                                title:'Music'
                            },
                            {
                                name:'书籍',
                                path:'/book',
                                bgColor:'rgb(121, 85, 72)',
                                title:'Book'
                            },
                            {
                                name:'图片',
                                path:'/photo',
                                bgColor:'#3f51b5',
                                title:'Photo'
                            }
                        ]
                        }
                    },
        components:{
            CHeader,
            Cfooter
        },
      created(){
            var menu = this.list.filter((elem)=>{
                return elem.path == this.$route.path
            });
          this.$store.dispatch('changbg',menu[0]);
      },
      methods:{
            xx(menu){
                this.bgColor = menu.bgColor;
                this.title = menu.title;
                console.log(this.title)
            }
      }
  }
</script>
<style lang="scss" scoped>
    .content{
        /*position: absolute;*/
        /*top: 1rem;*/
        /*left: 0;*/
        margin: 1rem 0;
    }
</style>
