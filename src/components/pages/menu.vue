<template>
    <div>
        
        
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <router-link to="/page/" class="nav-link active">小1</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/page/child2" class="nav-link ">小2</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/page/child3" class="nav-link ">小3</router-link>
            </li>
            
        </ul>
        
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
