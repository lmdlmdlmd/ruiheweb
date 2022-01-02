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
        <Form :data="paramsData" @change="handleChange"></Form>
      </div>
      <div class="setting-block-item">
        <Form :data="freshStatus"></Form>
      </div>
      <div class="setting-block-item">
        <Form :data="freshSetting" @change="handleChange"></Form>
      </div>
      <div class="setting-block-item">
        <Form :data="airStatus"></Form>        
      </div>
      <div class="setting-block-item">
        <Form :data="airSetting" @change="handleChange"></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

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
    initData(){
      console.log("initData");
      //获取1楼数据
      this.paramsData = {
        title: '参数设置',
        formList: [{
          modelName: 'ps1', //保存时 和value一起传给后端
          inputLabel: '模式',
          type: 'select',
          value: '1',
          value_s: '五恒',
          options: [{ //select 和 radio 需要传过来渲染
              lable: '五恒',
              value: '1'
          },{
              lable: '春夏',
              value: '2'
          },{
              lable: '循环',
              value: '3'
          }]
        },{
          modelName: 'ps2',
          inputLabel: '设定除湿湿度',
          type: 'num',
          value: 26,
          min: 10,
          max: 80,
          extra: '%'
        },{
          modelName: 'ps3',
          inputLabel: '冬季加湿设定湿度',
          type: 'num',
          value: 26,
          min: 10,
          max: 80,
          extra: '%'
        },{
          modelName: 'ps4',
          inputLabel: '盘管保护设定温度',
          type: 'num',
          value: 3,
          min: 0,
          max: 50,
          extra: '℃'
        },{
          modelName: 'ps5',
          inputLabel: '高风险湿度偏差值',
          type: 'num',
          value: 26,
          min: 10,
          max: 30,
          extra: '%'
        },{
          modelName: 'ps6',
          inputLabel: '低风险湿度偏差值',
          type: 'num',
          value: 26,
          min: 10,
          max: 30,
          extra: '%'
        },{
          modelName: 'ps7',
          inputLabel: '送风档位',
          type: 'num',
          value: 3,
          min: 0,
          max: 10
        },{
          modelName: 'ps8',
          inputLabel: '排风档位',
          type: 'num',
          value: 3,
          min: 0,
          max: 10
        },{
          modelName: 'ps9',
          inputLabel: '回风露点值',
          type: 'num',
          value: 26,
          min: 0,
          max: 100
        },{
          modelName: 'ps10',
          inputLabel: '回风设定露点值',
          type: 'num',
          value: 26,
          min: 0,
          max: 100
        },{
          modelName: 'ps11',
          inputLabel: '送风露点',
          type: 'num',
          value: 26,
          min: 0,
          max: 100
        },{
          modelName: 'ps12',
          inputLabel: '送风露点保护设定值',
          type: 'num',
          value: 26,
          min: 0,
          max: 100
        },{
          modelName: 'ps13',
          inputLabel: '夏季舒适温度',
          type: 'num',
          value: 26,
          min: 10,
          max: 30,
          extra: '℃'
        },{
          modelName: 'ps14',
          inputLabel: '冬季舒适温度',
          type: 'num',
          value: 26,
          min: 10,
          max: 30,
          extra: '℃'
        },{
          modelName: 'ps15',
          inputLabel: '冬季低温设定温度',
          type: 'num',
          value: 26,
          min: 10,
          max: 30,
          extra: '℃'
        },{
          modelName: 'ps16',
          inputLabel: '夏季毛细管设定温度',
          type: 'num',
          value: 26,
          min: 10,
          max: 30,
          extra: '℃'
        },{
          modelName: 'ps17',
          inputLabel: '冬季毛细管供水设定温度',
          type: 'num',
          value: 26,
          min: 10,
          max: 30,
          extra: '℃'
        }]
      }

      //获取2楼数据
      this.freshStatus = {
        title: '新风运行状态',
        formList: [{
          inputLabel: '初效压差开关',
          type: 'text',
          value: '堵塞',
          color: 'red'
        },{
          inputLabel: '高效压差开关',
          type: 'text',
          value: '正常',
          color: 'green'
        },{
          inputLabel: '室内风盘联动点',
          type: 'text',
          value: '正常',
          color: 'green'
        },{
          inputLabel: '送风风机',
          type: 'text',
          value: '运行状态',
          color: 'green'
        },{
          inputLabel: '送风风机',
          type: 'text',
          value: '故障状态',
          color: 'red'
        },{
          inputLabel: '排风风机',
          type: 'text',
          value: '运行状态',
          color: 'green'
        },{
          inputLabel: '排风风机',
          type: 'text',
          value: '故障状态',
          color: 'red'
        },{
          inputLabel: '室内回风温度',
          type: 'text',
          value: '60℃',
          color: 'red'
        },{
          inputLabel: '室内回风湿度',
          type: 'text',
          value: '10%',
          color: 'red'
        },{
          inputLabel: '新风温度（室外）',
          type: 'text',
          value: '30%',
          color: ''
        },{
          inputLabel: '新风湿度',
          type: 'text',
          value: '60%',
          color: ''
        },{
          inputLabel: '送风温度',
          type: 'text',
          value: '26℃',
          color: ''
        },{
          inputLabel: '送风湿度',
          type: 'text',
          value: '26%',
          color: ''
        },{
          inputLabel: '新风机盘管温度/表冷器温度',
          type: 'text',
          value: '70℃',
          color: 'red'
        }]
      }

      //获取3楼数据
      this.freshSetting = {
        title: '新风设备开关',
        formList: [{
          modelName: 'fs1',
          inputLabel: '新风直膨主机',
          type: 'switch',
          value: false
        },{
          modelName: 'fs2',
          inputLabel: '加湿水阀',
          type: 'switch',
          value: true,
        },{
          modelName: 'fs3',
          inputLabel: '冷水阀',
          type: 'switch',
          value: false
        },{
          modelName: 'fs4',
          inputLabel: '新风风阀',
          type: 'switch',
          value: true
        },{
          modelName: 'fs5',
          inputLabel: '送风风机',
          type: 'switch',
          value: true,
          extra: '启动'
        },{
          modelName: 'fs6',
          inputLabel: '送风风机',
          type: 'radio',
          value: '2',
          options: [{
            lable: '自动',
            value: '1'
          },{
            lable: '手动',
            value: '2'
          }]
        },{
          modelName: 'fs7',
          inputLabel: '排风风机',
          type: 'switch',
          value: true,
          extra: '启动'
        },{
          modelName: 'fs8',
          inputLabel: '排风风机',
          type: 'radio',
          value: '2',
          options: [{
            lable: '自动',
            value: '1'
          },{
            lable: '手动',
            value: '2'
          }]
        },{
          modelName: 'fs9',
          inputLabel: '送风风机频率',
          type: 'num',
          value: 50,
          min: 0,
          max: 100
        },{
          modelName: 'fs10',
          inputLabel: '送风风机频率',
          type: 'num',
          value: 20,
          min: 0,
          max: 100
        }]
      }

      //获取4楼数据
      this.airStatus = {
        title: '空调运行状态',
        formList: [{
          inputLabel: '二次水泵1',
          type: 'text',
          value: '运行状态',
          color: 'green'
        },{
          inputLabel: '二次水泵1',
          type: 'text',
          value: '故障状态',
          color: 'red'
        },{
          inputLabel: '二次水泵2',
          type: 'text',
          value: '运行状态',
          color: 'green'
        },{
          inputLabel: '二次水泵2',
          type: 'text',
          value: '故障状态',
          color: 'red'
        },{
          inputLabel: '热水循环',
          type: 'text',
          value: '故障状态',
          color: 'red'
        },{
          inputLabel: '二次水温',
          type: 'text',
          value: '30℃',
          color: ''
        },{
          inputLabel: '热水循环',
          type: 'text',
          value: '30℃',
          color: ''
        }]
      }

      //获取5楼数据
      this.airSetting = {
        title: '空调设备开关',
        formList: [{
          modelName: 'as1',
          inputLabel: '二次水泵1',
          type: 'switch',
          value: true
        },{
          modelName: 'as2',
          inputLabel: '二次水泵1',
          type: 'radio',
          value: '2',
          options: [{
            lable: '自动',
            value: '1'
          },{
            lable: '手动',
            value: '2'
          }]
        },{
          modelName: 'as3',
          inputLabel: '二次水泵2',
          type: 'switch',
          value: true
        },{
          modelName: 'as4',
          inputLabel: '二次水泵2',
          type: 'radio',
          value: '2',
          options: [{
            lable: '自动',
            value: '1'
          },{
            lable: '手动',
            value: '2'
          }]
        },{
          modelName: 'as5',
          inputLabel: '空调水机组主机1',
          type: 'switch',
          value: true,
        },{
          modelName: 'as6',
          inputLabel: '空调水机组主机2',
          type: 'switch',
          value: true,
        },{
          modelName: 'as7',
          inputLabel: '毛细管制冷水阀',
          type: 'switch',
          value: true
        },{
          modelName: 'as8',
          inputLabel: '辅助制热',
          type: 'switch',
          value: false
        },{
          modelName: 'as9',
          inputLabel: '热水循环',
          type: 'switch',
          value: true
        },{
          modelName: 'as10',
          inputLabel: '热水循环',
          type: 'radio',
          value: '2',
          options: [{
            lable: '自动',
            value: '1'
          },{
            lable: '手动',
            value: '2'
          }]
        },{
          modelName: 'as11',
          inputLabel: '排风扇1',
          type: 'switch',
          value: true
        },{
          modelName: 'as12',
          inputLabel: '排风扇1',
          type: 'num',
          value: 3,
          min: 0,
          max: 10
        },{
          modelName: 'as13',
          inputLabel: '锅炉启停',
          type: 'switch',
          value: false
        },{
          modelName: 'as14',
          inputLabel: '空调水机组主机3',
          type: 'switch',
          value: false
        }]
      }
    },

    //提交数据
    handleChange(name, value){
      console.log("handleChange: name: " + name + " value: " + value);
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
