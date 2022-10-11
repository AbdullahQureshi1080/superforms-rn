# **Super forms (React-Native)** 😎

Super forms using formik and yup in react-native with built-in ready to use form components that are customizable. 

## **What We doing & Why** 

Almost all sort of mobile applications have forms in them whether we call the forms or not, and boy after a few user actions it becomes redundant to write the same code again. The pain point is that for each form input you have to have a field state whether explicitely defined or impleictyly with additional error and validation checks, this makes having to manage alot of state and effects. 

Luckily for us formik, a great resource has given us the ability to minimize that code redundancy and manage our forms with perfomant state managament with build in support of using yups validation schemes for all our validation checks. 

We broke down the formik form usage in multiple components each with it's unique value and built ourselves a custom form and form fields that are formik supercharged, so you don't have to care about the methods from formik and writing them again and again.  What you can do is just initializate a **Form** component with initial **Values**, a **Validation Scheme**, and a **Submit Handler**. 

## **Superforms in action**

<img src="docs/superform.gif" width="300" height="600" style=" border-radius:3px; margin-top: 10px; margin-bottom:10px "/>


## **Installation** 

```bash
npm i @superforms/superforms-rn
```
**Note:** Make sure to have react version ```>=16.13.1```

## **How it works**

```js
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Form, FormField, SubmitButton} from '@superforms/superforms-rn';
import * as Yup from 'yup';

const App = () => {

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string().required('Password is required').label('Password').min(5),
  fullName: Yup.string().required('Name is required').label('Full Name'),
});

  const handleSubmit = (values) => {
    console.log('Values', values);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f8f8f8', flex: 1}}>
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
    </SafeAreaView>
  );
};

export default App;
```



## **Components Props**

* ### **Form**

    | Property                                |                   Type                   | Description                           |
    | --------------------------------------- | :--------------------------------------: | :--------------------------------------- |
    | test                                |           test (default false)           | test          |
    | test                                   |                  test                  | test|


* ### **FormField**

* ### **Submit**




<!-- ## **Contributers**

## **In Progress**

## **Support & Issues** 

## **Acknowledgments**

### **Consider supporting with a ⭐️ star on GitHub** -->


