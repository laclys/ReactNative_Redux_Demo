import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Counter from '../components/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import *as counterAction from '../actions/counterAction';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'})
  ]
})

class MainPage extends Component {

  static navigationOptions = {
    title: 'MainPage',
  };

  logout() {
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    const { user } = this.props.navigation;
    const { count, incrementFn, decrementFn } = this.props;
    return(
      <View style={styles.container}>
        <Text>お名前：{this.props.user.name}</Text>
        <Text>年齢：{this.props.user.age}</Text>
        <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
        </Counter>
        <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
          <View>
            <Text>ログアウト
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
    backgroundColor: '#F5FFFF'
  }
})

export default connect(
  (state) => ({
    count: state.counter.count,
    user: state.loginIn.user,
  }),
  (dispatch) => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(MainPage)
