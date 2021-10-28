<template>
  <div id="app">
    <div class="app-container" :class="'theme_' + $root.theme">
      <div :style="marginStyle">
        <div style="position: relative;">
          <div class="main-container" style="width: 1920px;height: 1200px;" :style="transformStyle">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
export default {
  data() {
    return {
      scaleX: 1,
      scaleY: 1,
      marginYHorizontal: 0,
      marginXHorizontal: 0,
    }
  },
  computed: {
    transformStyle: function () {
      return {
        transform: `scale(${this.scaleX}, ${this.scaleY})`
      };
    },
    marginStyle: function () {
      return {
        margin: `${this.marginYHorizontal}px ${this.marginXHorizontal}px`
      };
    }
  },
  methods: {
    //初始化缩放比例
    initData() {
      this.scaleX = 1;
      this.scaleY = 1;
      this.marginXHorizontal = 0;
      this.marginYHorizontal = 0;
    },
    //计算缩放
    initScale() {
      this.initData();
      let $container = document.querySelector('.app-container');
      let containerWidth = this.getComputedStyle($container, 'width').replace("px", "");
      let containerHeight = this.getComputedStyle($container, 'height').replace("px", "");
      containerWidth = Number(containerWidth);
      containerHeight = Number(containerHeight);
      containerWidth = isNaN(containerWidth) ? 0 : containerWidth;
      containerHeight = isNaN(containerHeight) ? 0 : containerHeight;
      console.log(`${containerHeight},${containerWidth}`);
      let defaultHeight = 1200;
      let defaultWidth = 1920;
      // sacle 缩放比例。
      let scale = 1;
      // 优先 height
      if (containerHeight < defaultHeight || containerHeight > defaultHeight) {
        scale = containerHeight / defaultHeight;
        this.scaleX = scale;
        this.scaleY = scale;
      }
      // 然后 width
      else if (containerWidth < defaultWidth || containerWidth > defaultWidth) {
        scale = containerWidth / defaultWidth;
        this.scaleX = scale;
        this.scaleY = scale;
      }
      console.log(`scale =  ${scale}`);
      let marginWidth = defaultWidth * scale;
      if (containerWidth > marginWidth) {
        marginWidth = (containerWidth - marginWidth) / 2;
        this.marginXHorizontal = marginWidth;
      }
      let marginHeight = defaultHeight * scale;
      if (containerHeight > marginHeight) {
        marginHeight = (containerHeight - marginHeight) / 2;
        this.marginYHorizontal = marginHeight;
      }
    },
    //监听窗口变化
    listenResize() {
      this.initScale();
      window.addEventListener('resize', () => {
        this.initScale();
      });
    },
    //获取dom样式
    getComputedStyle(el, key) {
      return el && el.currentStyle ? el.currentStyle[key] : window.getComputedStyle ? window.getComputedStyle(el, void 0).getPropertyValue(key) : el.style[key];
    }
  },
  mounted() {
    this.listenResize();
  }
}
</script>
<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .app-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  
  .app-container.theme_1 {
    background-image: url(assets/bg1.png);
    background-size: 100% 100%;
    background-color: #131313;
  }
  .app-container.theme_2 {
    background-image: url(assets/bg2.png);
    background-size: 100% 100%;
    background-color: #131313;
  }

  .main-container {
    position: relative;
    user-select: none;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    transition: all .3s linear;
    overflow: hidden;
  }
</style>
