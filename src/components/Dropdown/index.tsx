import React from 'react';
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FormikValues } from 'formik';

import { styles } from './styles';

type Props<T> = {
  options: T[];
  onSelect: (item: T, index: number) => void;
  renderItem: (item: T, index: number, isSelected: boolean) => React.ReactNode;
  placeholder: string;
  formik: FormikValues;
  name: string;
};

export const Dropdown = <T extends { id: string }>({
  options,
  onSelect,
  renderItem,
  placeholder,
  formik,
  name,
}: Props<T>) => {
  const errorMessage = formik.errors[name];

  const isError = errorMessage && formik.touched[name];

  return (
    <View style={styles.wrapper}>
      <SelectDropdown
        search
        data={options}
        onBlur={() => formik.setFieldTouched(name)}
        onSelect={onSelect}
        renderButton={selectedItem => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.id) || placeholder}
              </Text>
            </View>
          );
        }}
        renderItem={(item: T, index, isSelected) => {
          return (
            <View
              style={[styles.dropdownItemStyle, isSelected && styles.bgActive]}>
              {renderItem(item, index, isSelected)}
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      {isError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};
