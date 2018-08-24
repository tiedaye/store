<template>
        <ul class="footer" :style="{background:bgColor}">
            <li v-for="val in list" >
                <router-link :to="val.path" @click.native="changfather(val)">{{val.name}}</router-link>
                <!--<router-link :to="val.path" @click.native="changbg(val)">{{val.name}}</router-link>-->
            </li>
        </ul>
</template>
<script>
    import { mapState } from 'vuex'
    export default{
        data(){
            return {
                bgColor:'rgb(33, 150, 243)'
            }
        },
        props:['list'],
        // computed:mapState(['bgColor']),
        // methods:{
        //     changbg(menu){
        //         this.$store.dispatch('changbg',menu)
        //     }
        // },
        methods:{
            changfather(menu){
                this.bgColor = menu.bgColor;
                this.$emit('changfather',menu);
            }
        }
    }
</script>
<style lang="scss">
     .footer{
         height:1rem;
         width: 100%;
         position: fixed;
         bottom: 0;
         display: flex;
         line-height: 1rem;
         li{
              flex-grow: 1;
             text-align: center;
             a{
                 color:#ccc;
                 outline: none;
                 &.router-link-active{
                     color: #fff;
                 }
             }
         }
     }
</style>