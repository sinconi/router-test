<template>
    <div>
        <!-- <router-link to="/page/">小1</router-link>
        <router-link to="/page/child2">小2</router-link>
        <router-link to="/page/child3">小3</router-link> -->
        <div>
            <h1>我是分頁！</h1>
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
    export default {
    // name: 'page',
        data () {
        return {
            
        }
    }
    }
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
