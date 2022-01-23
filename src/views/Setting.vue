<template>
  <div class="setting-container">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" />
        <p>瑞和五恒</p>
      </div>
    </div>
    <div class="setting-block">
      <div class="setting-block-item">
        <Form :data="paramsData" @change="(name, value) => handleChange('ruihe', name, value)"></Form>
      </div>
      <div class="setting-block-item">
        <Form :data="freshStatus"></Form>
      </div>
      <div class="setting-block-item">
        <Form :data="freshSetting" @change="(name, value) => handleChange('fan', name, value)"></Form>
      </div>
      <div class="setting-block-item">
        <Form :data="airStatus"></Form>        
      </div>
      <div class="setting-block-item">
        <Form :data="airSetting" @change="(name, value) => handleChange('air', name, value)"></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import { getSettingModel, getSettingValue, setSettingValue} from '@/api/setting'


export default {
  name: "Setting",
  components: {
    Form
  },
  data() {
    return {
      paramsData: {},
      freshStatus: {},
      freshSetting: {},
      airStatus: {},
      airSetting: {},
    };
  },
  methods: {
    //请求页面数据进行渲染
    initData(){
      getSettingModel().then(res => {
        console.log(res);
        
        if(res.code == 0){
          //参数设置
          this.paramsData = {
            title: '参数设置',
            formList: res.ruihe ? res.ruihe.settings : []
          };
          //新风状态
          this.freshStatus = {
            title: '新风运行状态',
            formList: res.fan ? res.fan.status : []
          }
          //新风控制
          this.freshSetting = {
            title: '新风设备开关',
            formList: res.fan ? res.fan.settings : []
          }
          //空调状态
          this.airStatus = {
            title: '空调运行状态',
            formList: res.air ? res.air.status : []
          }
          //空调控制
          this.airSetting = {
            title: '空调设备开关',
            formList: res.air ? res.air.settings : []
          }

          //渲染后获取数据
          this.$nextTick(() => {
            this.getData();
            setInterval(() => {
              this.getData();
            }, 30000);            
          });
        } else {
          this.$message.warning(res.msg);
        }
      });
    },

    //每30s轮循获取数据
    getData(){
      getSettingValue().then(res => {
        console.log(res);

        //参数设置
        this.paramsData.formList.forEach(item => {
          item.value = res.ruihe.settings[item.modelName];
        });
        this.paramsData.formList = Object.assign([], this.paramsData.formList);

        //新风状态
        this.freshStatus.formList.forEach(item => {
          item.value = res.fan.status[item.modelName];
        });
        this.freshStatus.formList = Object.assign([], this.freshStatus.formList);

        //新风控制
        this.freshSetting.formList.forEach(item => {
          item.value = res.fan.settings[item.modelName];
        });
        this.freshSetting.formList = Object.assign([], this.freshSetting.formList);

        //空调状态
        this.airStatus.formList.forEach(item => {
          item.value = res.air.status[item.modelName];
        });
        this.airStatus.formList = Object.assign([], this.airStatus.formList);

        //空调控制
        this.airSetting.formList.forEach(item => {
          item.value = res.air.settings[item.modelName];
        });
        this.airSetting.formList = Object.assign([], this.airSetting.formList);
      });
    },


    //提交数据
    handleChange(dev, name, value){
      console.log("handleChange: dev: " + dev + " name: " + name + " value: " + value);

      setSettingValue(dev, name, value).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.initData();
  },
};
</script>

<style scoped lang="scss">
.setting-container {
  min-width: 1800px;
  padding: 30px 50px;
  background-image: url(../assets/bg1.png);
  background-size: 100% 100%;
  background-color: #1e212a;
}

.header {
  height: 80px;
  color: #828289;

  .logo {
    float: left;
    width: 340px;

    img {
      float: left;
      margin-top: 5px;
    }

    p {
      float: left;
      margin-left: 20px;
      line-height: 50px;
      font-size: 30px;
      color: #fff;
      letter-spacing: 2px;
    }
  }
}

.setting-block {
  width: 100%;

  .setting-block-item {
    margin-bottom: 30px;
    background-color: #1b1a1e;
    border-radius: 25px;
  }
}
</style>
