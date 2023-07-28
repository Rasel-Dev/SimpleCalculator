import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  preview: string;
  previews: string[];
  answer: number | null;
};

const Display = ({preview, previews, answer}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.itemRight,
            typeof answer === 'number' ? styles.preview : styles.answer,
          ]}>
          {previews?.join(' ') + ' ' + preview}
          {typeof answer === 'number' && '='}
        </Text>
      </View>
      <View
        style={
          typeof answer !== 'number' ? styles.hideAnswer : styles.showAnswer
        }>
        <Text style={[styles.itemRight, styles.answer]}>{answer || 3923}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: '#f5f6fa',
    padding: 10,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  itemRight: {
    textAlign: 'right',
  },
  preview: {
    fontWeight: '400',
    color: '#7f8fa6',
    fontSize: 22,
  },
  answer: {
    fontWeight: '600',
    color: '#000',
    fontSize: 35,
  },
  hideAnswer: {
    display: 'none',
  },
  showAnswer: {
    display: 'flex',
  },
});

export default Display;
