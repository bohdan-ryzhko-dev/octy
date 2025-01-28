import { FormikValues } from 'formik';
import React, { FC } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

type Props = {
  formik: FormikValues;
  name: string;
} & TextInputProps;

export const Input: FC<Props> = ({ formik, name, ...props }) => {
  const errorMessage = formik.errors[name];

  const isError = errorMessage && formik.touched[name];

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        value={formik.values[name]}
        {...props}
      />
      {isError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};
