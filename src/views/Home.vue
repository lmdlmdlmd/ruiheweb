<template>
  <div class="main" :class="'theme_' + $root.theme">

    <!-- 修改模式弹窗 -->
    <change-mode v-show="modeShow" :mode='mode' @ok='confirmChangeMode' @close='modeShow = false'></change-mode>

    <Header></Header>

    <div class="container">
      <div class="cards">
        <div class="card-main">
          <div class="change-mode" @click="handleChangeMode">
            春秋季弱制热<span class="iconfont icon-qiehuan"></span>
          </div>
          <div class="data-box">
            <div class="data-item">
              <p class="value">22<span>℃</span></p>
              <p class="icon"><span class="iconfont icon-wendu"></span></p>
              <p class="label">温度</p>
            </div>
            <div class="data-item">
              <p class="value">60<span>%</span></p>
              <p class="icon"><span class="iconfont icon-shidu-1"></span></p>
              <p class="label">湿度</p>
            </div>
            <div class="data-item">
              <p class="value">35</p>
              <p class="icon"><span class="iconfont icon-Leaf"></span></p>
              <p class="label">PM2.5</p>
            </div>
          </div>
          <div class="tip">体感适宜，已进入五恒模式，系统低负载运行中</div>
        </div>

        <div class="card-out">
          <div class="title">室外</div>
          <div class="out-box">
            <div class="out-item">
              <p class="value">22℃</p>
              <p class="label">温度</p>
            </div>
            <div class="out-item">
              <p class="value">90%</p>
              <p class="label">湿度</p>
            </div>
            <div class="out-item">
              <p class="value"><span class="iconfont icon-yu"></span></p>
              <p class="label">小雨</p>
            </div>
            <div class="out-item">
              <p class="value">78</p>
              <p class="label">PM2.5</p>
            </div>
          </div>
        </div>

        <div class="card-life">
          <div class="title">生活指数</div>
          <div class="life-box">
            <div class="life-item">
              <p class="icon"><span class="iconfont icon-clothes"></span></p>
              <p class="label">穿衣</p>
              <p class="value">薄外套</p>
            </div>
            <div class="life-item">
              <p class="icon"><span class="iconfont icon-yundong"></span></p>
              <p class="label">运动</p>
              <p class="value">不宜</p>
            </div>
            <div class="life-item">
              <p class="icon"><span class="iconfont icon-xiche"></span></p>
              <p class="label">洗车</p>
              <p class="value">不宜</p>
            </div>
          </div>
        </div>
      </div>
      <div class="change-theme" @click="handleChangeTheme">
        界面模式切换<span class="iconfont icon-shezhi"></span>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ChangeMode from './ChangeMode.vue';

export default {
  name: "Home",
  components: {
    Header,
    ChangeMode,
  },
  data() {
    return {
      modeShow: false,
      mode: 1,
    };
  },
  methods: {
    // 打开切换模式页面
    handleChangeMode() {
      this.modeShow = true;
    },
    // 确认切换模式
    confirmChangeMode(val) {
      console.log(val)
      this.modeShow = false;
    },

    //切换主题
    handleChangeTheme() {
      this.$root.theme++;
      if(this.$root.theme > 2){
        this.$root.theme = 1
      }
    },
  },
};
</script>

<style scoped lang="scss">
.cards {
  position: relative;
  width: 100%;
  height: 820px;
}

.card-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 1250px;
  height: 100%;
  box-sizing: border-box;
  padding: 50px 80px;
  background-image: url(../assets/card_main_bg1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .change-mode {
    display: inline-block;
    height: 50px;
    font-size: 40px;
    color: #fff;
    cursor: pointer;

    span {
      margin-left: 15px;
      color: #656b8d;
      font-size: 40px;
    }
  }

  .data-box {
    width: 990px;
    height: 300px;
    margin: 150px auto 0;

    .data-item {
      float: left;
      width: 330px;
      height: 100%;
      text-align: center;

      .value {
        margin-bottom: 60px;
        font-size: 72px;
        color: #fff;
        letter-spacing: 4px;
        span{
          font-size: 45px;
        }
      }
      .icon {
        margin-bottom: 60px;
        span {
          font-size: 50px;
          color: #23a786;
        }
      }
      .label {
        font-size: 36px;
        color: #828289;
        letter-spacing: 2px;
      }
    }
  }

  .tip {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 175px;
    text-align: left;
    font-size: 34px;
    letter-spacing: 2px;
  }
}

.card-out {
  position: absolute;
  top: 0;
  right: 0;
  width: 460px;
  height: 480px;
  box-sizing: border-box;
  padding: 50px 30px;
  background-image: url(../assets/card_out_bg1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .title {
    display: inline-block;
    height: 50px;
    margin-left: 20px;
    font-size: 40px;
    color: #fff;
    letter-spacing: 2px;
  }

  .out-box {
    width: 100%;
    height: 300px;
    margin: 45px auto 0;

    .out-item {
      float: left;
      width: 50%;
      height: 150px;
      text-align: center;

      .value {
        font-size: 44px;
        color: #fff;
        letter-spacing: 2px;
        span{
          font-size: 44px;
        }
      }
      .label {
        font-size: 34px;
        color: #828289;
        letter-spacing: 2px;
      }      
    }
  }
}

.card-life {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 460px;
  height: 310px;
  box-sizing: border-box;
  padding: 45px;
  background-color: #1b1a1e;
  background-image: none;
  border-radius: 25px;

  .title {
    display: inline-block;
    height: 50px;
    margin-left: 10px;
    font-size: 40px;
    color: #fff;
    letter-spacing: 2px;
  }

  .life-box {
    width: 100%;
    height: 140px;
    margin: 40px auto 0;

    .life-item {
      float: left;
      width: 33.33%;
      height: 140px;
      text-align: center;

      .icon span {
        margin-bottom: 5px;
        font-size: 50px;
        color: #656B8D;
      }
      .label {
        margin-bottom: 5px;
        font-size: 20px;
        color: #828289;
        letter-spacing: 2px;
      }
      .value {
        font-size: 34px;
        color: #bbbbbb;
        letter-spacing: 2px;
      }
    }
  }
}

.change-theme {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: 35px;
  text-align: right;
  color: #656b8d;
  font-size: 35px;
  cursor: pointer;

  span {
    margin-left: 10px;
    font-size: 35px;
  }
}

// 不同主题
.theme_2 {
  .card-main {
    background-image: url(../assets/card_main_bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .change-mode {
      span {
        color: #fff;
      }
    }

    .data-box {
      .data-item {
        .icon span {
          color: #fff;
        }
        .label {
          color: #fff;
        }
      }
    }
  }
  
  .card-out {
    background-image: url(../assets/card_out_bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .out-box {
      .out-item {
        .label {
          color: #fff;
        }
      }
    }
  }
  
  .card-life {
    background-color: rgba(0,0,0,.3);

    .life-box {
      .life-item {
        .icon span,
        .label,
        .value {
          color: #fff;
        }
      }
    }
  }

  .change-theme {
    color: #fff;
  }
}
</style>
