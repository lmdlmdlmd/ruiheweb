<template>
  <div class="main dialog" :class="'theme_' + $root.theme">
    <div class="back" @click="handleGoBack">
      <span class="iconfont icon-31fanhui1"></span>返回
    </div>

    <div class="container" :mode="mode">
      <div class="modes">
        <div class="mode-box" v-for="item in modeList" :key="item.id">
          <div class="mode-item" :class="(mode == item.name) ? 'active' : ''" @click="handleClickMode(item)">
            <p v-if="item.name && item.name.length < 6">{{item.name}}<br>模式</p>
            <p v-else>{{item.name}}模式</p>
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
      modeList: [{
        id: 1,
        name: '新风除湿'
      }, {
        id: 2,
        name: '夏季五恒'
      }, {
        id: 3,
        name: '秋季弱冷'
      }, {
        id: 4,
        name: '冬季弱制热'
      }, {
        id: 5,
        name: '冬季五恒'
      }, {
        id: 6,
        name: '春秋季弱制热'
      }]
    };
  },
  methods: {
    handleGoBack(){
      this.$emit('close');
    },
    handleClickMode(data){
      this.$emit('ok', data.name);
    }
  }
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
  font-size: 34px;
  letter-spacing: 2px;
  cursor: pointer;

  span {
    margin-right: 20px;
    font-size: 34px;
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
