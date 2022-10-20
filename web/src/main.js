import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
const dragscroll = (el) => {
    el.onmousedown = ev => {
        const disX = ev.clientX;
        const disY = ev.clientY; 
        const originalScrollLeft = el.scrollLeft;
        const originalScrollTop = el.scrollTop; 
        el.style['scroll-behavior'] = 'auto';
        document.onmousemove = dv => {
            dv.preventDefault();
            const distanceX = dv.clientX - disX;
            const distanceY = dv.clientY - disY; // 需要上下移动可以加
            el.scrollTo(originalScrollLeft - distanceX, originalScrollTop - distanceY);
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
};


const app = createApp(App)
app.directive('dragscroll',dragscroll)
app.mount('#app')
