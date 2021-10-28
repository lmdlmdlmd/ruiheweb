<template>
  <div class="main">

    <!-- 房间设置弹窗 -->
    <room-setting v-if="settingShow" :room='roomInfo' @update="updateData" @close='settingShow = false'></room-setting>

    <Header></Header>

    <div class="container">
      <div class="rooms">
        <div class="room-box" v-for="item in roomList" :key="item.id">
          <div class="room-item" :class="item.status ? 'active' : ''" @click="handleShowSetting(item)">
            <p class="switch" @click.stop><el-switch v-model="item.status" :active-value='1' :inactive-value='0' @change="handleSwitchRoomStatus(item)"></el-switch></p>
            <p class="temperature"><span class="iconfont icon-wendu"></span>{{item.temperature}}℃</p>
            <p class="humidity"><span class="iconfont icon-shidu-1"></span>{{item.humidity}}%</p>
            <p class="name">{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import RoomSetting from './RoomSetting.vue';

export default {
  name: "Room",
  components: {
    Header,
    RoomSetting,
  },
  data() {
    return {
      settingShow: false,
      roomInfo: {},
      
      roomList: [{
        id: 1,
        status: 1,
        temperature: '22',
        humidity: '60',
        name: '房间1',
      },{
        id: 2,
        status: 1,
        temperature: '22',
        humidity: '60',
        name: '房间2房间2',
      },{
        id: 3,
        status: 1,
        temperature: '22',
        humidity: '60',
        name: '房间3房间3房间3',
      },{
        id: 4,
        status: 0,
        temperature: '22',
        humidity: '60',
        name: '房间43210',
      },{
        id: 5,
        status: 1,
        temperature: '22',
        humidity: '60',
        name: '房间房间房间',
      },{
        id: 6,
        status: 0,
        temperature: '22',
        humidity: '60',
        name: '房间6',
      },{
        id: 7,
        status: 1,
        temperature: '22',
        humidity: '60',
        name: '房间7',
      },{
        id: 8,
        status: 1,
        temperature: '22',
        humidity: '60',
        name: '房间8',
      }],
      switch1: true,
      switch2: false,
    };
  },
  methods: {
    // 打开切换模式页面
    handleShowSetting(data) {
      this.roomInfo = data;
      this.settingShow = true;
    },
    //开启/关闭
    handleSwitchRoomStatus(item){
      console.log(item)
    },

    //修改房间信息后，根据接口更新列表
    updateData(){

    }
    
  },
};
</script>

<style scoped lang="scss">
.rooms {
  display: flex;
  width: 100%;
  height: 820px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: space-between;
  
  .room-box {
    width: 20%;
    height: 390px;

    .room-item {
      width: 313px;
      height: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 10px 40px;
      background-color: #202435;
      border-radius: 25px;
      text-align: center;
      font-size: 48px;
      color: #888888;
      cursor: pointer;

      .switch {
        height: 60px;
        text-align: right;

        ::v-deep .el-switch .el-switch__core {
          width: 50px !important;
          height: 26px;
          border-radius: 12px;
          border-color: #6e7286;
          background-color: #6e7286;
        }
        ::v-deep .el-switch .el-switch__core::after {
          top: 3px;
          background-color: #3E435E;
        }

        ::v-deep .el-switch.is-checked .el-switch__core {
          border-color: #ffffff;
          background-color: #ffffff;
        }
        ::v-deep .el-switch.is-checked .el-switch__core::after {
          background-color: #6670a6;
        }
      }

      .temperature,
      .humidity {
        width: 100%;
        height: 90px;
        line-height: 90px;
        
        span {
          margin-right: 10px;
          font-size: 48px;
          color: #888888;
        }
      }

      .name {
        width: 100%;
        height: 120px;
        line-height: 120px;
        font-size: 34px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .room-item.active {
      background-color: #3E445E;
      color: #fff;

      .temperature,
      .humidity {
        span {
          color: #23A786;
        }
      }
    }    
  }
}
// 不同主题
.theme_2 {
  .rooms {
    .room-box {
      .room-item {
        background-color: rgba(0,0,0,.3);
        color: #ccc;      
        
        .temperature,
        .humidity {
          span {
            color: #d5d5d5;
          }
        }
      }
      .room-item.active {
        background-color: rgba(0,0,0,.5);
        color: #fff;

        .temperature,
        .humidity {
          span {
            color: #23A786;
          }
        }
      }
    }
  }
}
</style>
