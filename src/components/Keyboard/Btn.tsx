import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
};

const Btn = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, styles.defaultBg]}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};
export default Btn;

export const AcBtn = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, styles.defaultBg]}>
      <Text style={[styles.btnText, styles.acText]}>{children}</Text>
    </TouchableOpacity>
  );
};

export const DelBtn = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, styles.defaultBg]}>
      <Text style={[styles.btnText, styles.delText]}>{children}</Text>
    </TouchableOpacity>
  );
};

export const SumBtn = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, styles.sumBg]}>
      <Text style={[styles.btnText, styles.sumText]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#f5f6fa',
    borderRadius: 10,
  },
  defaultBg: {
    backgroundColor: '#dcdde1',
  },
  btnText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#353b48',
  },
  acText: {
    color: '#e84118',
  },
  delText: {
    color: '#0073af',
  },
  sumBg: {
    backgroundColor: '#00a8ff59',
  },
  sumText: {
    color: '#0073af',
    fontSize: 45,
  },
});
