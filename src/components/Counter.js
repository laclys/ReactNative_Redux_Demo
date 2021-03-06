import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './Button';

export default class Counter extends Component {

  render() {
    console.log('counter');
    console.log(this.props);
    const { decrementFn, incrementFn, counter } = this.props;
    return (
      <View style={styles.container}>
        <Button onClick={decrementFn} text={'マイナス'} />
        <Text style={styles.label}>{counter}
        </Text>
        <Button onClick={incrementFn} text={'プラス'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    width: 40,
    textAlign: 'center',
  }
})
