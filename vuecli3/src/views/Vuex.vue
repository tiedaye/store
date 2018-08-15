<template>
    <div>
        <h1>我是vuex的界面</h1>
        <h1>{{count}}</h1>
        <h1>{{msg}}</h1>
        <h1>{{len}}</h1>
        <!--<h1>{{$store.getters.count100}}</h1>-->
        <h1>{{count100}}</h1>
        <!--<button @click="$store.state.count++">+</button>-->
        <!--<button @click="$store.commit('add',2)">-</button>-->
        <!--<button @click="$store.dispatch('addaction',3)">+</button>-->
        <!--<button @click="add(3)">+</button>-->
        <button @click="addaction(3)">+</button>
        <button @click="$store.commit('sub',2)">-</button>
        <input type="text" v-model="xx">
    </div>
</template>
<script>
    import { mapState,mapMutations ,mapGetters,mapActions}from 'vuex'
    export default {
        data(){
            return {
                xx:'sssss'
            }

        },
        // methods:{
        //     add(){
        //         return this.$store.commit('add',2)
        //     }
        // },
        methods:{
            ...mapMutations(['add']),
            ...mapActions(['addaction'])
        },
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        // computed: mapState({
        //     count:state=>{ return state.count++},
        //     msg:state=>state.msg
        // }),
        computed:{
            len(){
                return this.xx.length;
            },
            ...mapState(['count','msg']),
            ...mapGetters(['count100'])
        }


    }
</script>
<style>

</style>