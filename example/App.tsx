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

import React, {useEffect, useRef, useState} from 'react';
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
  DatePickerEnums,
  ImagePickerEnums,
  FormDate,
  FormImage,
} from '@superforms/superforms-rn';
// import BaseComponent from './src/Build/BaseComponent';
// import ImagePicker, {ImagePickerEnums} from './src/Build/BaseComponent';

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
  imagepicker: Yup.string().required(),
});

const App = () => {
  const renders = ++useRef(0).current;

  const handleSubmit = (values: FormikValues) => {
    console.log('Values', values);
    Alert.alert(JSON.stringify(values));
  };

  const [values, setValues] = useState<FormikValues>({});

  useEffect(() => {
    const valuesFromAPI = {
      email: 'tonyAlveraz@gmail.com',
      fullName: 'Tony Alveraz',
      password: 'Test12345@',
      datepicker: new Date('2022-03-25'),
      imagepicker:
        'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    };
    setTimeout(() => {
      setValues(valuesFromAPI);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log('Values Updated!', values);
  }, [values]);

  return (
    <SafeAreaView style={{backgroundColor: '#f8f8f8', flex: 1}}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{color: '#000'}}>renders:{renders}</Text>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Form
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}>
            <FormField name="email" label="Email" />
            <FormField name="password" label="Password" />
            <FormField name="fullName" label="Full Name" />
            {/* <BaseComponent
              label="Birthdate"
              name="datepicker"
              date={values.datepicker}
              mode={DatePickerEnums.DATE}
            /> */}
            <FormDate
              label="Birthdate"
              name="datepicker"
              date={values.datepicker}
              mode={DatePickerEnums.DATE}
            />
          
            <FormImage
              label="Profile Image"
              name="imagepicker"
              mediaType={ImagePickerEnums.PHOTO}
              onChange={res => console.log('IMAGE YO RES,', res)}
              // imageProps={{resizeMode: 'stretch'}}
              // placeholderImageStyles={{tintColor: 'red'}}
            />
         
            <SubmitButton name="Login" />
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
