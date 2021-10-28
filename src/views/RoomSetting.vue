<template>
  <div class="main dialog" :class="'theme_' + $root.theme">
    <div class="back" @click="handleGoBack">
      <span class="iconfont icon-31fanhui1"></span>返回
    </div>

    <div class="container" :room="room">
      <div class="room-box">
        <div class="title">房间设置</div>
        <div class="room-item">
          <span class="label">房间名称：</span>
          <div class="value">
            <input v-model="name" placeholder="请输入房间名" @blur="handleSaveInfo('name')">
            <span v-if="errorTip" class="error-tip">{{errorTip}}</span>
          </div>
        </div>
        <div class="room-item">
          <span class="label">设置温度：</span>
          <div class="value">
            <span class="iconfont icon-jian" @click="handleSaveInfo('temperature', '2')"></span>
            <span class="room-number">{{temperature}}<span>℃</span></span>
            <span class="iconfont icon-jiahao1" @click="handleSaveInfo('temperature', '1')"></span>
          </div>
        </div>
        <div class="room-item">
          <span class="label">设置湿度：</span>
          <div class="value">
            <span class="iconfont icon-jian" @click="handleSaveInfo('humidity', '2')"></span>
            <span class="room-number">{{humidity}}<span>%</span></span>
            <span class="iconfont icon-jiahao1" @click="handleSaveInfo('humidity', '1')"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: "RoomSetting",
  props: {
    room: {
      type: Object,
      required: true,
      default: null
    }
  },
  data() {
    return {
      name: this.room.name,
      temperature: this.room.temperature,
      humidity: this.room.humidity,

      errorTip: ''
    };
  },
  created: function () {
    //修改温度/湿度后，延迟1s上送数据
    this.debouncedSubmitData = debounce(this.submitData, 1000)
  },
  methods: {
    handleGoBack(){
      this.$emit('close');
    },
    handleSaveInfo(key, type){
      if(!this.name){
        this.errorTip = "请输入房间名"
        return;
      } else {
        this.errorTip = ""        
      }

      let params = {};
      if(key === 'name'){
        params = {
          name: this.name
        }
      } else if(key === 'temperature'){
        //高温不超过35℃
        if(type === '1' && this.temperature < 35){
          this.temperature++;
        }
        //低温不低于10℃
        else if(type === '2' && this.temperature > 10){
          this.temperature--;
        }
        params = {
          temperature: this.temperature
        }
      } else if(key === 'humidity'){
        //高湿不超过100%
        if(type === '1' && this.humidity < 100){
          this.humidity++;
        }
        //低湿不低于0%
        else if(type === '2' && this.humidity > 0){
          this.humidity--;
        }
        params = {
          humidity: this.humidity
        }
      }
      console.log(params);

      //调接口处理数据
      this.debouncedSubmitData(params);
    },

    //请求接口
    submitData(data){
      console.log(data);

      this.$emit('update');
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
  font-size: 34px;
  letter-spacing: 2px;
  cursor: pointer;

  span {
    margin-right: 20px;
    font-size: 34px;
  }
}

.room-box {
  width: 1380px;
  height: 850px;
  margin: 30px auto;
  border-radius: 25px;
  background: transparent;

  .title {
    width: 100%;
    height: 140px;
    line-height: 140px;
    margin-bottom: 20px;
    font-size: 50px;
    text-align: center;
    letter-spacing: 4px;
  }

  .room-item {
    width: 100%;
    height: 180px;

    display: flex;
    align-items: center;

    .label {
      width: 330px;
      height: 180px;
      line-height: 180px;
      text-align: right;
      font-size: 40px;
      margin-right: 20px;
    }

    .value {
      position: relative;
      width: calc(100% - 330px);

      input {
        width: 780px;
        height: 100px;
        line-height: 100px;
        padding: 0 30px;
        outline: none;
        border: 0;
        border-radius: 10px;
        background-color: #D9DEF5;
        font-family: 'OPPOSans-L', sans-serif;
        font-size: 40px;
      }
      input:focus {
        background-color: #fff;        
      }

      .error-tip {
        position: absolute;
        display: inline-block;
        top: 110px;
        left: 0;
        width: 780px;
        font-size: 25px;
        color: red;
        text-align: left;
      }

      span {
        display: inline-block;
        text-align: center;
        font-size: 50px;
        color: #555D92;
      }
      span.iconfont {
        width: 60px;
        cursor: pointer;
      }
      span.room-number {
        width: 240px;
        color: #fff;

        span {
          font-size: 35px;
          color: #fff;
        }
      }
    }
  }
}

// 不同主题
.theme_2 {
  .room-box {
    background-color: rgba(0,0,0,.3);

    .room-item {
      .value {
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
