import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Display from './components/Display';
import KeyBoard from './components/Keyboard/KeyBoard';

const App = () => {
  const [singleField, setSingleField] = useState<string>('');
  const [previewFields, setPreviewFields] = useState<string[]>([]);
  const [answer, setAnswer] = useState<{
    result: number;
    visible: boolean;
  }>({
    result: 0,
    visible: false,
  });

  const compute = (fields: string[] = []) => {
    if (fields.length < 2) {
      return 0;
    }
    const clone = [...fields];
    const divs = clone.filter(i => i === '/');
    const mults = clone.filter(i => i === 'x');
    const subs = clone.filter(i => i === '-');
    const adds = clone.filter(i => i === '+');

    const oparetors = [...divs, ...mults, ...subs, ...adds];

    for (let i = 0; i < oparetors.length; i++) {
      const opIndex = clone.findIndex(pi => pi === oparetors[i]);
      const num1 = +clone?.[opIndex - 1];
      const num2 = +clone?.[opIndex + 1];

      switch (oparetors[i]) {
        case '/':
          clone.splice(opIndex - 1, 3, num1 / num2 + '');
          break;
        case 'x':
          clone.splice(opIndex - 1, 3, num1 * num2 + '');
          break;
        case '-':
          clone.splice(opIndex - 1, 3, num1 - num2 + '');
          break;

        default:
          clone.splice(opIndex - 1, 3, num1 + num2 + '');
          break;
      }
    }

    return parseFloat(parseFloat(clone?.[0]).toFixed(2)) || 0;
  };

  const clearHandle = () => {
    setSingleField('');
    setPreviewFields([]);
    setAnswer({result: 0, visible: false});
  };

  const deleteHandle = () => {
    if (answer.visible) {
      const com = compute([...previewFields, singleField]);
      setAnswer({result: com, visible: false});
      return;
    }
    if (singleField) {
      const availableNum = singleField.substring(0, singleField.length - 1);
      setSingleField(availableNum);
      const com = compute([...previewFields, availableNum]);
      setAnswer({result: com, visible: false});
      return;
    }
    if (previewFields.length) {
      const clone = [...previewFields];
      if (!+clone?.[clone.length - 1]) {
        clone.length = clone.length - 1;
      }
      const nextItem = clone.splice(clone.length - 1, 1)?.[0];
      const com = compute([...clone, nextItem]);
      setSingleField(nextItem);
      setPreviewFields(clone);
      setAnswer({result: com, visible: false});
    }
  };

  const resultHandle = () => setAnswer(prev => ({...prev, visible: true}));

  const numberHandle = (num: string) => {
    if (num === '.') {
      if (!singleField.includes('.')) {
        const com = compute([...previewFields, singleField + num]);
        setSingleField(prev => prev + num);
        setAnswer({
          result: com,
          visible: false,
        });
      }
      return;
    }
    const com = compute([...previewFields, singleField + num]);
    setSingleField(prev => prev + num);
    setAnswer({
      result: com,
      visible: false,
    });
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
    if (answer.visible) {
      setPreviewFields([answer.result + '', oparetor]);
      setAnswer(prev => ({...prev, visible: false}));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display
        previews={[...previewFields, singleField]}
        showAnswerPreview={!answer.visible}
        answer={answer.result}
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
