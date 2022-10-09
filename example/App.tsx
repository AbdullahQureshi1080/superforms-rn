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
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

// import {Form, FormField, SubmitButton} from '@Components';

import {Form, FormField, SubmitButton} from '@superforms/superforms-rn';

// Supporting Imports
import * as Yup from 'yup';

import {FormikValues} from 'formik';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string()
    .required('Password is required')
    .label('Password')
    .min(5),
  // .test(
  //   'strongPassword',
  //   'The password must contain a minimum of eight characters with at least one uppercase, lowercase, number, and special character',
  //   function (value: string | undefined) {
  //     var format =
  //       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  //     if (format.test(value!)) {
  //       return true;
  //     }
  //     return false;
  //   },
  // ),
  fullName: Yup.string().required('Name is required').label('Full Name'),
});

const App = () => {
  const renders = ++useRef(0).current;

  const handleSubmit = (values: FormikValues) => {
    console.log('Values', values);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f8f8f8', flex: 1}}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{color: '#000'}}>renders:{renders}</Text>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Form
            initialValues={{email: '', fullName: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}>
            <FormField name="email" label="Email" />
            <FormField name="password" label="Password" />
            <FormField name="fullName" label="Full Name" />
            <SubmitButton name="Login" />
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
