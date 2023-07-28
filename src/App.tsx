import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Display from './components/Display';
import KeyBoard from './components/Keyboard/KeyBoard';

const App = () => {
  const [singleField, setSingleField] = useState<string>('');
  const [previewFields, setPreviewFields] = useState<string[]>([]);
  const [answer, setAnswer] = useState<{result: number; visible: boolean}>({
    result: 0,
    visible: false,
  });

  const clearHandle = () => {
    setSingleField('');
    setPreviewFields([]);
    setAnswer({result: 0, visible: false});
  };

  const numberHandle = (num: string) => setSingleField(prev => prev + num);

  const oparetionHandle = (op: string) => {
    setSingleField('');
    if (singleField) {
      setPreviewFields(prev => [...prev, singleField, op]);
    }
    if (answer.result) {
      setPreviewFields([answer.result + '', op]);
      setAnswer({result: 0, visible: false});
    }
    // else {
    //   setPreviewFields(prev => {
    //     prev.splice(prev.length - 1, 1, op);
    //     return prev;
    //   });
    // }
  };

  const resultHandle = () => {
    setSingleField('');
    if (singleField && previewFields.length) {
      setPreviewFields(prev => [...prev, singleField]);
      setAnswer({result: 340, visible: true});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display
        preview={singleField}
        previews={previewFields}
        answer={answer.visible ? answer.result : null}
      />
      <KeyBoard
        clearHandler={clearHandle}
        numberHandler={numberHandle}
        oparetionHandler={oparetionHandle}
        resultHandler={resultHandle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
