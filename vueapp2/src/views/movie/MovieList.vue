<template>
        <li>
            <!--{{movie.}}-->
            <div class="left">
                <img :src="list.images.small" alt="">
            </div>
            <div class="right">
                <p class="title">{{list.title}}</p>
                <p>豆瓣评分:<span class="avg">{{list.rating.average}}</span></p>
                主演:<span v-for="val in list.casts">{{val.name}} </span>
            </div>
        </li>
</template>

<script>
    export default {
        name: "MovieList",
        props:['list']
    }
</script>

<style scoped lang="scss">
    li{
        display: flex;
        & .left{
            flex-grow: 1;
            width: 0;
            margin: 20px 20px;
        }
        & .right{
            flex-grow: 3;
            width: 0;
            margin: 20px 30px;
            & .title{
                font-size: 20px;
            }
            & .avg{
                color: orange;
            }
        }
    }
</style>