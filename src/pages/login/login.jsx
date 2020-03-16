import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './login.scss'
import { getSearch } from '../../servers/servers'

export default class Login extends Component {
  config = {
    navigationBarTitleText: '登录'
  }


  searchBut() {
    getSearch({ keywords: '海阔天空' }).then(res => {
      console.log("这是login文件", res);
    })
  }

  render() {
    return (
      <View className="login">
        <AtButton className="myButton" type="primary" onClick={this.searchBut}>自定义按钮</AtButton>
      </View>
    )
  }
}