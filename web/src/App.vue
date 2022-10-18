<script>
export default {
  methods: {
    move(e) {
            e.preventDefault()
            // 获取元素
            var left = document.querySelector('.left')
            var img = document.querySelector('.img')
            var x = e.pageX - img.offsetLeft
            var y = e.pageY - img.offsetTop
            // 添加鼠标移动事件
            left.addEventListener('mousemove', move)
                    function move(e) {
                    img.style.left = e.pageX - x + 'px'
                    img.style.top = e.pageY - y + 'px'
                    }
            // 添加鼠标抬起事件，鼠标抬起，将事件移除
            img.addEventListener('mouseup', function() {
                left.removeEventListener('mousemove', move)
            })
            // 鼠标离开父级元素，把事件移除
            left.addEventListener('mouseout', function() {
                left.removeEventListener('mousemove', move)
            })
            },
        // 缩放图片
        rollImg() { 
        /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */ 
        var zoom = parseInt(this.$refs.imgDiv.style.zoom) || 100; 
        /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */ 
        zoom += event.wheelDelta / 12;
            /* 最小范围 和 最大范围 的图片缩放尺度 */ 
            if (zoom >= 50 && zoom <500) { 
            this.$refs.imgDiv.style.zoom = zoom + "%"; 
            }
            return false; 
        }
  }
}
</script>

<template>
<div span="8" class="left"  @mousewheel.prevent="rollImg">
   <img src="../images/sample.png" alt="error" class="img" ref="imgDiv" @mousedown="move">
</div>
</template>

<style scoped>

</style>
