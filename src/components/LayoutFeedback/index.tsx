import React, { FC, PropsWithChildren } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './styles';

type Props = Required<PropsWithChildren>;

export const LayoutFeedback: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.innerWrapper}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={styles.innerWrapper}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {children}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
