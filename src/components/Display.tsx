import React from 'react';
import type {StyleProp, TextStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  previews: string[];
  answer: number;
  showAnswerPreview: boolean;
};

const Display = ({previews, answer, showAnswerPreview}: Props) => {
  let fontStyle: StyleProp<TextStyle> = styles.textXxl;
  const previewLen = previews?.join('').length;

  if (previewLen >= 11 && previewLen < 14) {
    fontStyle = styles.textXl;
  }
  if (previewLen >= 14 && previewLen < 75) {
    fontStyle = styles.textMd;
  }
  if (previewLen >= 75) {
    fontStyle = styles.textSm;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.itemRight,
            !showAnswerPreview
              ? [styles.preview, styles.textMd]
              : [styles.answer, fontStyle],
          ]}>
          {previews?.join(' ')}
          {!showAnswerPreview && ' ='}
        </Text>
        <Text
          style={[
            styles.itemRight,
            showAnswerPreview
              ? styles.ansPreview
              : [
                  styles.answer,
                  answer.toString().length < 15
                    ? styles.textXxl
                    : styles.textXl,
                ],
          ]}>
          {+answer || ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
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
  },
  textSm: {
    fontSize: 17,
  },
  textMd: {
    fontSize: 25,
  },
  textXl: {
    fontSize: 35,
  },
  textXxl: {
    fontSize: 45,
  },
  ansPreview: {
    fontWeight: '400',
    color: '#7f8fa6',
    fontSize: 20,
  },
  answer: {
    fontWeight: '600',
    color: '#353b48',
  },
});

export default Display;
