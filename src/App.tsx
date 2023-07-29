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
    if (singleField) {
      setSingleField(prev => prev.substring(0, prev.length - 1));
      return;
    }
    if (previewFields.length) {
      const clone = [...previewFields];
      if (!+clone?.[clone.length - 1]) {
        clone.length = clone.length - 1;
      }
      const nextItem = clone.splice(clone.length - 1, 1)?.[0];
      setSingleField(nextItem);
      setPreviewFields(clone);
      setAnswer({result: 0, visible: false});
    }
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
      let result = 0;
      const clone = [...previewFields, singleField];
      const divs = clone.filter(i => i === '/');
      const mults = clone.filter(i => i === 'x');
      const subs = clone.filter(i => i === '-');
      const adds = clone.filter(i => i === '+');

      const oparetors = [...divs, ...mults, ...subs, ...adds];
      // console.log('oparetors :', oparetors);

      for (let i = 0; i < oparetors.length; i++) {
        const opIndex = clone.findIndex(pi => pi === oparetors[i]);
        const num1 = +clone?.[opIndex - 1];
        const num2 = +clone?.[opIndex + 1];

        switch (oparetors[i]) {
          case '/':
            clone.splice(opIndex - 1, 3, num1 / num2 + '');
            // console.log('/', opIndex, num1, num2, clone);
            break;
          case 'x':
            clone.splice(opIndex - 1, 3, num1 * num2 + '');
            // console.log('*', opIndex, num1, num2, clone);
            break;
          case '-':
            clone.splice(opIndex - 1, 3, num1 - num2 + '');
            // console.log('-', opIndex, num1, num2, clone);
            break;

          default:
            clone.splice(opIndex - 1, 3, num1 + num2 + '');
            // console.log('+', opIndex, num1, num2, clone);
            break;
        }
      }
      result = +clone?.[0] || 0;

      setPreviewFields(prev => [...prev, singleField]);
      setAnswer({result, visible: true});
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
    backgroundColor: '#f5f6fa',
  },
});

export default App;
