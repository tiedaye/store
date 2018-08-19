<template>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
        <swipe-item class="slide5"></swipe-item>
    </swipe>
</template>

<script>
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        name: "Book",
        components:{
            swipe:Swipe,
            'swipe-item':SwipeItem
        }
    }
</script>

<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background: url("http://localhost:8080/img/background1.jpg") center no-repeat;
        background-size: contain;
        color: #fff;
    }

    .slide2 {
        background: url('http://localhost:8080/img/小丸子.jpeg') center no-repeat;
        background-size: contain;
        color: #000;
    }

    .slide3 {
        background: url("http://localhost:8080/img/小奶熊.png") center no-repeat;
        background-size: contain;
        color: #fff;
    }
    .slide4{
        background: url("http://localhost:8080/img/城市小路.jpg") center no-repeat;
        background-size: contain;
        color: #fff;
    }
    .slide5 {
        background: url("http://localhost:8080/img/气球.jpg") center no-repeat;
        background-size: contain;
        color: #fff;
    }
</style>