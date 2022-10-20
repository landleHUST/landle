### landle 记录

##### 拖动组件

```javascript
const dragscroll = (el) => {
  el.onmousedown = (ev) => {
    const disX = ev.clientX;
    const disY = ev.clientY; // 需要上下移动可以加
    const originalScrollLeft = el.scrollLeft;
    const originalScrollTop = el.scrollTop; // 需要上下移动可以加
    const originalScrollBehavior = el.style["scroll-behavior"];
    const originalPointerEvents = el.style["pointer-events"];
    el.style["scroll-behavior"] = "auto";
    // 鼠标移动事件是监听的整个document，这样可以使鼠标能够在元素外部移动的时候也能实现拖动
    document.onmousemove = (dv) => {
      dv.preventDefault();
      const distanceX = dv.clientX - disX;
      const distanceY = dv.clientY - disY; // 需要上下移动可以加
      // console.log(originalScrollLeft ,originalScrollTop , distanceX, distanceY);
      el.scrollTo(
        originalScrollLeft - distanceX,
        originalScrollTop - distanceY
      ); // 需要上下移动和左右移动
      // el.scrollTo(originalScrollLeft - distanceX, 0); // 不需要上下拖拽，y轴值为0
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      el.style["scroll-behavior"] = originalScrollBehavior;
      el.style["pointer-events"] = originalPointerEvents;
    };
  };
};
```
