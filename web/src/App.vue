<template>
    <div class="img-out-box"
         v-dragscroll
         style="width: 2000px;height:2000px;overflow: hidden">
        <img style="`width: 4000px;height: 4000px;`"
             class="img"
             src="../images/sample.png" 
             alt="error"
             ref="img"
             @mousewheel.prevent="rollImg">
    </div>

</template>
 
<script>
export default {
    methods: {
        rollImg(){
            var zoom =parseInt(this.$refs.img.style.zoom) || 100;
            zoom+=event.wheelDelta/12;
            if(zoom >=50 && zoom < 500)
            {
                this.$refs.img.style.zoom=zoom+"%";
            }
            return false;
        }
    }
}
</script>
 
<style scoped>
 
</style>