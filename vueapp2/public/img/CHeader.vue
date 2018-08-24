<template>
    <div class="header" :style="{background:bgColor}">
        首页
        <h1 class="header-title">{{title}}</h1>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export  default {
      computed:mapState(['bgColor','title'])
    }
</script>
<style lang="scss">
   .header{
       z-index: 1;
       height:1rem;
       width: 100%;
       color: #fff;
       line-height: 1rem;
       position: fixed;
       font-size: 16px;
       top:0;
       &-title{
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%,-50%);
       }
   }
</style>