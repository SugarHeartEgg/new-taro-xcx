import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui'
import './home.scss'

export default class Home extends Component {

  state = {
    num: 3
  }

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    const { num } = this.state.num
    return (
      <View className='home'>
        <Text>我是新建的</Text>
        <View>{num}</View>
        <View><AtButton type="primary">按钮文案</AtButton></View>
      </View>
    );
  }
}
