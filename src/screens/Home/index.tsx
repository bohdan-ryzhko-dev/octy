import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { unwrapResult } from '@reduxjs/toolkit';

import { useAppDispatch, useReduxStore } from '../../hooks';
import { fetchCurrencies, fetchExchangeRate } from '../../redux/currencies';
import { Dropdown, Input, LayoutFeedback } from '../../components';
import { useFormik } from 'formik';
import { convertValidationSchema } from './utils';

import { styles } from './styles';
import { setHistory } from '../../redux';

const initialValues = {
  base: 'USD',
  target: '',
  amount: '',
};

const getCurrenciesOptions = (currencies: Record<string, number>) =>
  Object.keys(currencies).map(id => ({
    id,
  }));

export const HomeScreen = () => {
  const { currencies, history } = useReduxStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currencies.data) {
      return;
    }

    dispatch(fetchCurrencies());
  }, [currencies.data, dispatch]);

  const formik = useFormik({
    initialValues,
    onSubmit: async values => {
      const data = await dispatch(
        fetchExchangeRate({
          base: values.base,
          target: values.target,
        }),
      ).then(unwrapResult);

      dispatch(
        setHistory({
          base: values.base,
          target: values.target,
          amount: data * Number(formik.values.amount),
          id: `${history.data.length + 1}`,
        }),
      );
    },
    validationSchema: convertValidationSchema,
  });

  return (
    <LayoutFeedback>
      <View style={styles.container}>
        <View style={styles.dropdowns}>
          <Dropdown
            formik={formik}
            name="base"
            options={getCurrenciesOptions(
              currencies.data?.conversion_rates || {},
            )}
            onSelect={selectedCurrency =>
              formik.setFieldValue('base', selectedCurrency.id)
            }
            renderItem={item => <Text>{item.id}</Text>}
            placeholder={formik.values.base}
          />
          <Dropdown
            formik={formik}
            name="target"
            options={getCurrenciesOptions(
              currencies.data?.conversion_rates || {},
            )}
            onSelect={selectedCurrency =>
              formik.setFieldValue('target', selectedCurrency.id)
            }
            renderItem={item => <Text>{item.id}</Text>}
            placeholder={formik.values.target || 'Target currency'}
          />
        </View>
        <Input formik={formik} name="amount" keyboardType="numeric" />
        <Button onPress={() => formik.handleSubmit()} title="Convert" />
        {currencies.exchangeRate && (
          <Text>{currencies.exchangeRate * Number(formik.values.amount)}</Text>
        )}
      </View>
    </LayoutFeedback>
  );
};
