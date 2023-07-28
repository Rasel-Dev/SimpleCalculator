import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
};

const Btn = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f5f6fa',
  },
  btnText: {
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Btn;
