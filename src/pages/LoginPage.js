import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import *as loginAction from '../actions/loginAction';// 导入action方法
import { NavigationActions } from 'react-navigation';
import MainPage from './MainPage';
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main'})
  ]
})

 class LoginPage extends Component {
  static navigationOptions = {
    title: 'LoginPage',
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 登录完成,切成功登录
    if (nextProps.status === '登録成功' && nextProps.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      return false;
    }
    return true;
  }

  render() {
    const { login } = this.props;
    return(
      <View style={styles.container}>
        <Text>登録状態: {this.props.status}
        </Text>
        <TouchableOpacity onPress={()=>login()} style={{marginTop: 50}}>
          <View style={styles.loginBtn}>
            <Text>ログイン
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  loginBtn: {
    borderWidth: 1,
    padding: 5,
  }
});

export default connect( // 将页面与store内的state，action关联在一起。实现视图部分与逻辑处理部分的关联
  (state) => ({
    status: state.loginIn.status,
    isSuccess: state.loginIn.isSuccess,
    user: state.loginIn.user,
  }),
  (dispatch) => ({
    login: () => dispatch(loginAction.login()),
  })
)(LoginPage)
