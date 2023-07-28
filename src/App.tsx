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

  const deleteHandle = () => {
    setSingleField(prev => {
      // if (prev) {
      return prev.substring(0, prev.length - 1);
      // }
      // previewFields.
    });
  };

  const numberHandle = (num: string) => {
    if (num === '.') {
      if (!singleField.includes('.')) {
        setSingleField(prev => prev + num);
      }
      return;
    }
    setSingleField(prev => prev + num);
  };

  const oparetorHandle = (op: string) => {
    let oparetor: string;
    switch (op) {
      case 'sub':
        oparetor = '-';
        break;
      case 'mul':
        oparetor = 'x';
        break;
      case 'div':
        oparetor = '/';
        break;

      default:
        oparetor = '+';
        break;
    }

    setSingleField('');
    if (singleField) {
      setPreviewFields(prev => [...prev, singleField, oparetor]);
    }
    if (answer.result) {
      setPreviewFields([answer.result + '', oparetor]);
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
        deleteHandler={deleteHandle}
        numberHandler={numberHandle}
        oparetorHandler={oparetorHandle}
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
