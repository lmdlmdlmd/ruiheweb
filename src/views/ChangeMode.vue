<template>
  <div class="main dialog" :class="'theme_' + $root.theme">
    <div class="back" @click="handleGoBack">
      <span class="iconfont icon-31fanhui1"></span>返回
    </div>

    <div class="container" :mode="mode">
      <div class="modes">
        <div class="mode-box">
          <div class="mode-item" @click="handleClickMode('1')">
            <p>新风除湿<br>模式</p>
          </div>
        </div>
        <div class="mode-box">
          <div class="mode-item" @click="handleClickMode('1')">
            <p>夏季五恒<br>模式</p>
          </div>
        </div>
        <div class="mode-box">
          <div class="mode-item" @click="handleClickMode('1')">
            <p>秋季弱冷<br>模式</p>
          </div>
        </div>
        <div class="mode-box">
          <div class="mode-item" @click="handleClickMode('1')">
            <p>冬季弱制热<br>模式</p>
          </div>
        </div>
        <div class="mode-box">
          <div class="mode-item active" @click="handleClickMode('1')">
            <p>冬季五恒<br>模式</p>
          </div>
        </div>
        <div class="mode-box">
          <div class="mode-item" @click="handleClickMode('1')">
            <p>模式1</p>
          </div>
        </div>
        <div class="mode-box">
          <div class="mode-item" @click="handleClickMode('1')">
            <p>模式2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeMode",
  props: {
    mode: {
      required: true
    }
  },
  data() {
    return {
      switch1: true,
      switch2: false,
    };
  },
  methods: {
    handleGoBack(){
      this.$emit('close');
    },
    handleClickMode(val){
      // this.$router.push('/home');
      this.$emit('ok', val);
    }
  },
};
</script>

<style scoped lang="scss">
.back {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding-right: 20px;
  text-align: left;
  color: #fff;
  font-size: 30px;
  letter-spacing: 2px;
  cursor: pointer;

  span {
    margin-right: 20px;
    font-size: 30px;
  }
}

.modes {
  display: flex;
  width: 100%;
  height: 820px;
  margin-top: 90px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: space-between;
  
  .mode-box {
    width: 20%;
    height: 390px;

    .mode-item {
      width: 313px;
      height: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 20px 40px;
      background-color: #202435;
      border-radius: 25px;
      text-align: center;
      color: #888888;
      cursor: pointer;

      display: flex;
      align-items: center;

      p {
        width: 100%;
        line-height: 60px;
        font-size: 40px;
        letter-spacing: 2px;
      }
    }

    .mode-item.active {
      background-color: #3E445E;
      color: #fff;
    }
  }
}
// 不同主题
.theme_2 {
  .modes {
    .mode-box {
      .mode-item {
        background-color: rgba(0,0,0,.3);
        color: #ccc;        
      }
      .mode-item.active {
        background-color: rgba(0,0,0,.5);
        color: #fff;
      }
    }
  }
}
</style>
