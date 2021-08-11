import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import CircleButton from '../components/CircleButton';
// import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.inputContainer} behavior="height">
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </KeyboardAvoidingView>
      {/* <KeyboardSafeView style={styles.inputContainer} behavior="height">
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </KeyboardSafeView> */}
      <CircleButton name="check" onPress={() => { navigation.goBack(); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
