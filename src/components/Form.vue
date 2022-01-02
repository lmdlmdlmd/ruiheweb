<template>
  <div class="form-container" :data="data">
    <div class="title"><span>{{formData.title}}</span></div>

    <div class="form-box">
      <template v-for="item in formData.formList">
        <div class="form-item" :key="item.modelName">
          <div class="form-item-lable">{{item.inputLabel}}</div>

          <!-- 文字 -->
          <div class="form-item-context" v-if="item.type === 'text'">
            <div class="text" :class="item.color">{{ item.value }} <span></span></div>
          </div>

          <!-- 选择 -->
          <div class="form-item-context" v-if="item.type === 'select'">
            <div class="value">
              <span class="iconfont icon-31fanhui1" @click="handleChangeMode(item.modelName, item.value, item.options, '2')"></span>
              <span class="room-number">{{item.value_s || item.value}}</span>
              <span class="iconfont icon-31fanhui1" @click="handleChangeMode(item.modelName, item.value, item.options, '1')" style="transform: rotate(180deg);"></span>
            </div>
          </div>

          <!-- 数字 -->
          <div class="form-item-context" v-if="item.type === 'num'">
            <div class="value">
              <span class="iconfont icon-jian" @click="handleChange(item.modelName, '2')"></span>
              <input type="text" :value="item.value" @blur="handleBlur(item.modelName, $event)">
              <span class="iconfont icon-jiahao1" @click="handleChange(item.modelName, '1')"></span>
            </div>
            <span class="extra" v-if="item.extra">{{item.extra}}</span>
          </div>

          <!-- 开关 -->
          <div class="form-item-context" v-if="item.type === 'switch'">
            <div class="switch">
              <el-switch :value="item.value" @change="handleSwitch(item.modelName)"></el-switch>
            </div>
            <span class="extra" v-if="item.extra && item.value">{{item.extra}}</span>
          </div>

          <!-- 单选 -->
          <div class="form-item-context" v-if="item.type === 'radio'">
            <div class="radio">
              <el-radio-group :value="item.value">
                <el-radio v-for="option in item.options" :key="option.value" :label="option.value" @change="handleRadio(item.modelName, option.value)">{{option.lable}}</el-radio>
              </el-radio-group>
            </div>
          </div>

        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Form",
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    //切换模式
    handleChangeMode(name, value, list, method){
      console.log("data: " + JSON.stringify(this.formData));
      console.log("name: " + name + "value: " + value + " method: " + method + " list: " + JSON.stringify(list));

      let index = list.findIndex(item => {
          return item.value === value
      });
      console.log("index: " + index + " item: " + JSON.stringify(list[index]));

      let hotItem = null;

      //下一个，末尾则取第0个
      if(method === "1"){
        if(index === list.length - 1){
          hotItem = list[0];
        } else {
          hotItem = list[++index];          
        }
      }

      //下一个，第0个则取末尾
      if(method === "2"){
        if(index === 0){
          hotItem = list[list.length - 1];
        } else {
          hotItem = list[--index];          
        }
      }
      console.log("hotItem: " + JSON.stringify(hotItem));

      let hotValue = null;
      this.formData.formList.forEach(item => {
        if(item.modelName === name){
          item.value = hotItem.value;
          item.value_s = hotItem.lable;

          hotValue = item.value;
        }
      });
      this.formData = Object.assign({}, this.formData);

      this.$emit("change", name, hotValue);
    },

    //更新数字-加减号
    handleChange(name, method){
      console.log("data: " + JSON.stringify(this.formData));
      console.log("name: " + name + " method: " + method);

      let hotValue = null;
      this.formData.formList.forEach(item => {
        if(item.modelName === name){
          if(method === '1' && item.value < item.max){
            item.value++;
          }
          if(method === '2' && item.value > item.min){
            item.value--;
          }

          hotValue = item.value;
        }
      });
      this.formData = Object.assign({}, this.formData);

      this.$emit("change", name, hotValue);
    },

    //更新数字-输入框
    handleBlur(name, e){
      console.log("data: " + JSON.stringify(this.formData));
      console.log("name: " + name + " e.value: " + e.currentTarget.value);

      //去除非数字字符
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
      let currentValue = e.currentTarget.value;
      console.log("currentValue: " + currentValue);

      let hotValue = null;
      this.formData.formList.forEach(item => {
        if(item.modelName === name){
          if(currentValue > item.max){
            item.value = item.max;
          } else if(currentValue < item.min){
            item.value = item.min;
          } else {
            item.value = currentValue;
          }

          hotValue = item.value;
        }
      });
      this.formData = Object.assign({}, this.formData);

      this.$emit("change", name, hotValue);
    },

    //切换开关
    handleSwitch(name){
      console.log("data: " + JSON.stringify(this.formData));
      console.log("name: " + name);

      let hotValue = null;
      this.formData.formList.forEach(item => {
        if(item.modelName === name){
          item.value = !item.value;

          hotValue = item.value;
        }
      });
      this.formData = Object.assign({}, this.formData);

      this.$emit("change", name, hotValue);
    },

    //切换单选
    handleRadio(name, val){
      console.log("data: " + JSON.stringify(this.formData));
      console.log("name: " + name + " val: " + val);

      let hotValue = null;
      this.formData.formList.forEach(item => {
        if(item.modelName === name){
          item.value = val;

          hotValue = item.value;
        }
      });
      this.formData = Object.assign({}, this.formData);

      this.$emit("change", name, hotValue);
    }
  },
  watch: {
    data: {
      handler: function() {
        this.formData = this.data;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped lang="scss">
.form-container {
  padding: 30px 60px;
  color: #cccccc;

  .title {
    width: 100%;
    margin-bottom: 20px;
    font-weight: bold;

    span {
      display: inline-block;
      width: 200px;
      font-size: 25px;
      color: #646894;
      text-align: right;
    }
  }

  .form-box {
    width: 100%;
    font-size: 20px;
    overflow: hidden;

    .form-item {
      float: left;
      width: 30%;
      height: 40px;
      margin: 10px 1%;

      .form-item-lable {
        display: inline-block;
        width: 250px;
        vertical-align: middle;
        text-align: right;
        color: #999999;
      }

      .form-item-context {
        position: relative;
        display: inline-block;
        margin-left: 20px;
        font-size: 20px;
        text-align: left;

        .text {
          display: inline-block;
          vertical-align: middle;
        }
        .text.red {
          position: relative;
          color: red;
        }
        .text.red span:after {
          content: '';
          position: absolute;
          top: 10px;
          right: -20px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: red;
        }
        .text.green{
          color: green;
        }

        .value {
          display: inline-block;
          vertical-align: middle;
          background-color: #3F435E;
          border-radius: 5px;

          span {
            display: inline-block;
            padding: 8px;
            text-align: center;
            font-size: 20px;
            color: #fff;
          }
          span.iconfont {
            width: 20px;
            cursor: pointer;
          }
          span.room-number {
            display: inline-block;
            width: 80px;
            background-color: #D9DEF4;
            color: #1F2438;
          }
          input {
            display: inline-block;
            width: 80px;
            height: 26px;
            padding: 8px;
            outline: none;
            border: 0;
            border-radius: 0;
            text-align: center;
            font-size: 20px;
            background-color: #D9DEF4;
            font-family: 'OPPOSans-L', sans-serif;
            color: #1F2438;
          }
        }

        .extra {
          margin-left: 20px;
          vertical-align: middle;
        }

        .switch {
          display: inline-block;
          height: 40px;

          ::v-deep .el-switch .el-switch__core {
            width: 50px !important;
            height: 26px;
            border-radius: 12px;
            border-color: #6e7286;
            background-color: #6e7286;
          }
          ::v-deep .el-switch .el-switch__core::after {
            top: 4px;
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

        .radio {
          height: 40px;

          ::v-deep .el-radio .el-radio__inner {
            width: 24px;
            height: 24px;
            background-color: #1E212A;
            border: 3px solid #3D4052;
          }
          ::v-deep .el-radio.is-checked .el-radio__inner {
            background-color: #1E212A;
            border: 3px solid #6570A6;
          }

          ::v-deep .el-radio .el-radio__inner::after {
            width: 10px;
            height: 10px;
            background-color: #6570A6;
          }

          ::v-deep .el-radio .el-radio__label {
            vertical-align: middle;
            font-size: 20px;
            color: #6570A6;
          }
          ::v-deep .el-radio.is-checked .el-radio__label {
            color: #E6E6E6;
          }
        }

      }
    }
  }
}
</style>
