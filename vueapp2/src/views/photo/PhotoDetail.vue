<template>
    <router-link to="/photo">
        <v-touch class="photo" :style="{'background-image':'url('+photoList[index].src+')'}"
                 @swipeleft="left" @swiperight="right">

        </v-touch>
    </router-link>

</template>

<script>
    import { mapState } from  'vuex';
    export default {
        name: "PhotoDetail",
        data(){
            return{
                index:this.$route.params.index
                // 获取参数的时候写route  push的时候写router
            }
        },
        // created(){
        //     console.log(this.$route.params.index);
        // }
        computed:mapState(['photoList']),
        methods:{
            left(){
                if(this.index==this.photoList.length - 1){
                    this.index = 0;
                }else{
                    this.index++;
                }

                // console.log(this.photoList.length)
            },
            right(){
                if(this.index==0){
                    this.index = this.photoList.length -1;
                }else{
                    this.index--;
                }
            }
    }
    }
</script>

<style scoped>
    .photo{
        /*background-image: url('/img/1.jpg');*/
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #000;
        position:absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>