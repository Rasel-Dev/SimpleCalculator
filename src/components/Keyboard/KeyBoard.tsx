import React from 'react';
import {StyleSheet, View} from 'react-native';
import Btn, {AcBtn, DelBtn, SumBtn} from './Btn';

type Props = {
  clearHandler(): void;
  deleteHandler(): void;
  numberHandler: (num: string) => void;
  oparetorHandler: (op: string) => void;
  resultHandler(): void;
};

const KeyBoard = ({
  numberHandler,
  clearHandler,
  deleteHandler,
  oparetorHandler,
  resultHandler,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLayout}>
        <AcBtn onPress={clearHandler}>AC</AcBtn>
        <DelBtn onPress={deleteHandler}>Del</DelBtn>
        <Btn onPress={() => oparetorHandler('div')}>/</Btn>
        <Btn onPress={() => oparetorHandler('mul')}>x</Btn>
      </View>
      <View style={styles.rowLayout}>
        <Btn onPress={() => numberHandler('7')}>7</Btn>
        <Btn onPress={() => numberHandler('8')}>8</Btn>
        <Btn onPress={() => numberHandler('9')}>9</Btn>
        <Btn onPress={() => oparetorHandler('sub')}>-</Btn>
      </View>
      <View style={styles.rowLayout}>
        <Btn onPress={() => numberHandler('4')}>4</Btn>
        <Btn onPress={() => numberHandler('5')}>5</Btn>
        <Btn onPress={() => numberHandler('6')}>6</Btn>
        <Btn onPress={() => oparetorHandler('add')}>+</Btn>
      </View>
      <View style={styles.largeRowLayout}>
        <View style={styles.colLayout}>
          <View style={styles.rowLayout}>
            <Btn onPress={() => numberHandler('1')}>1</Btn>
            <Btn onPress={() => numberHandler('2')}>2</Btn>
            <Btn onPress={() => numberHandler('3')}>3</Btn>
          </View>
          <View style={styles.rowLayout}>
            <Btn onPress={() => numberHandler('00')}>00</Btn>
            <Btn onPress={() => numberHandler('0')}>0</Btn>
            <Btn onPress={() => numberHandler('.')}>.</Btn>
          </View>
        </View>
        <View style={styles.flexOne}>
          <SumBtn onPress={resultHandler}>=</SumBtn>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
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
