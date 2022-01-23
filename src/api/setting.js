import request from '@/utils/request'

//获取组件列表
export function getSettingModel () {
  return request({
    url: '/api/model',
    method: 'get'
  })
}

//获取数值
export function getSettingValue () {
  return request({
    url: '/api/get',
    method: 'get'
  })
}

//设置数值
export function setSettingValue (dev, name, value) {
    return request({
      url: '/api/set?dev=' + dev + '&name=' + name + '&val=' + value,
      method: 'get'
    })
  }



