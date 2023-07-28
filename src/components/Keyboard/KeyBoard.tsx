import React from 'react';
import {StyleSheet, View} from 'react-native';
import Btn from './Btn';

type Props = {
  clearHandler(): void;
  numberHandler: (num: string) => void;
  oparetionHandler: (op: string) => void;
  resultHandler(): void;
};

const KeyBoard = ({
  numberHandler,
  clearHandler,
  oparetionHandler,
  resultHandler,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLayout}>
        <Btn onPress={clearHandler}>AC</Btn>
        <Btn>Del</Btn>
        <Btn onPress={() => oparetionHandler('div')}>/</Btn>
        <Btn onPress={() => oparetionHandler('mul')}>x</Btn>
      </View>
      <View style={styles.rowLayout}>
        <Btn onPress={() => numberHandler('7')}>7</Btn>
        <Btn onPress={() => numberHandler('8')}>8</Btn>
        <Btn onPress={() => numberHandler('9')}>9</Btn>
        <Btn onPress={() => oparetionHandler('min')}>-</Btn>
      </View>
      <View style={styles.rowLayout}>
        <Btn onPress={() => numberHandler('4')}>4</Btn>
        <Btn onPress={() => numberHandler('5')}>5</Btn>
        <Btn onPress={() => numberHandler('6')}>6</Btn>
        <Btn onPress={() => oparetionHandler('add')}>+</Btn>
      </View>
      <View style={styles.largeRowLayout}>
        <View style={styles.colLayout}>
          <View style={styles.rowLayout}>
            <Btn onPress={() => numberHandler('1')}>1</Btn>
            <Btn onPress={() => numberHandler('2')}>2</Btn>
            <Btn onPress={() => numberHandler('3')}>3</Btn>
          </View>
          <View style={styles.rowLayout}>
            <Btn>%</Btn>
            <Btn onPress={() => numberHandler('0')}>0</Btn>
            <Btn onPress={() => numberHandler('.')}>.</Btn>
          </View>
        </View>
        <View style={styles.flexOne}>
          <Btn onPress={resultHandler}>=</Btn>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#dcdde1',
  },
  rowLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  colLayout: {
    flex: 3,
    flexDirection: 'column',
  },
  largeRowLayout: {
    flex: 2,
    flexDirection: 'row',
  },
  flexOne: {
    flex: 1,
  },
});

export default KeyBoard;
