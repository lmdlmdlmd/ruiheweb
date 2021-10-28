<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.png" @click='clickFullscreen' />
      <p>瑞和五恒</p>
    </div>
    <div class="menu">
      <span class="item" :class="activeMenu === 'Home' ? 'active' : ''" @click="handleGoPage('home')">
        主页
      </span>
      <span class="item" :class="activeMenu === 'Room' ? 'active' : ''" @click="handleGoPage('room')">
        房间
      </span>
      <span class="item" :class="activeMenu === 'Test' ? 'active' : ''" @click="handleGoPage('test')">
        调试
      </span>
    </div>
    <div class="time">
      <span>{{ date }}</span>
      <span>{{ week }}</span>
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'

import moment from "moment";
moment.locale("zh-cn", {
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
});

export default {
  name: "Header",
  props: {},
  data() {
    return {
      isFullscreen: false,

      date: "",
      week: "",
      time: "",
    };
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      // console.log(route)
      return route.name;
    },
  },
  mounted() {
    this.getCurrentTime();
    clearInterval(myTimeDisplay);
    let myTimeDisplay = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  },
  methods: {
    //格式化当前时间
    getCurrentTime() {
      this.date = moment().format("YYYY/MM/DD");
      this.week = moment().format("dddd");
      this.time = moment().format("HH:mm");
    },

    //去对应页面
    handleGoPage(name){
      this.$router.push('/' + name);
    },

    //全屏
    clickFullscreen(){
      if (!screenfull.isEnabled) {
          // this.$message({
          //   message: 'you browser can not work',
          //   type: 'warning'
          // })
          alert("you browser don't support fullscreen");
          return false;
        }
        // screenfull.toggle(); //支持全屏、支持退出全屏
        screenfull.request(); //支持全屏，不能退出全屏
    }
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 130px;
  color: #828289;
}

.logo,
.menu{
  float: left;
}

.logo {
  width: 340px;

  img {
    float: left;
    margin-top: 5px;
  }

  p {
    float: left;
    margin-left: 20px;
    line-height: 50px;
    font-size: 58px;
    color: #fff;
    letter-spacing: 2px;
  }
}

.menu {
  margin-left: 70px;
  width: 555px;

  .item {
    display: inline-block;
    position: relative;
    width: 185px;
    text-align: center;
    font-size: 40px;
    letter-spacing: 2px;
    cursor: pointer;
  }
  .item.active {
    font-size: 45px;
    color: #fff;
  }
  .item.active:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #42BCBB;
  }
}

.time {
  float: right;
  font-size: 40px;
  
  span {
    margin-left: 30px;
  }
}

// 不同主题
.theme_2 {
  .header {
      color: #fff;
  }
  .item.active:after {
    background: #fff;
  }
}
</style>
