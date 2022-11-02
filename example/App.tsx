/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

// Supporting Imports
import * as Yup from 'yup';

import {FormikValues} from 'formik';

import {
  Form,
  FormField,
  SubmitButton,
  FormDateSelector,
} from '@superforms/superforms-rn';
import DatePicker from './src/Build/BaseComponent';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string()
    .required('Password is required')
    .label('Password')
    .min(5),
  fullName: Yup.string().required('Name is required').label('Full Name'),
  datepicker: Yup.date()
    .required('Date is required')
    .label('Birthdate')
    .nullable(),
});

const App = () => {
  const renders = ++useRef(0).current;

  const handleSubmit = (values: FormikValues) => {
    console.log('Values', values);
    Alert.alert(JSON.stringify(values));
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f8f8f8', flex: 1}}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{color: '#000'}}>renders:{renders}</Text>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Form
            initialValues={{
              email: '',
              fullName: '',
              password: '',
              datepicker: null,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}>
            <FormField name="email" label="Email" />
            <FormField name="password" label="Password" />
            <FormField name="fullName" label="Full Name" />
            <FormDateSelector
              label="Birthdate"
              name="datepicker"
              // date={new Date()}
              // placeholder={'Please select a date'}
            />
            <SubmitButton name="Login" />
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
