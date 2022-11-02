

# **Super forms (React-Native)** 🚀


Super forms using formik and yup in react-native with built-in ready to use form components that are customizable. 

<br/>

## **What We doing & Why** 💭

Almost all sorts of mobile applications have forms in them whether we call the forms or not, and boy after a few user actions it becomes redundant to write the same code again. The pain point is that for each form input you have to have a field state whether explicitly defined or implicitly with additional error and validation checks, this makes having to manage a lot of states and effects. 

Luckily for us formik, a great resource has given us the ability to minimize that code redundancy and manage our forms with performant state management with built in support of using yups validation schemes for all our validation checks. 

We broke down the formik form usage into multiple components each with its unique value and built ourselves custom form and form fields that are formik supercharged, so you don't have to care about the methods from formik and writing them again and again.  What you can do is just initialize a **Form** component with initial **Values**, a **Validation Scheme**, and a **Submit Handler**. 

<br/>

## **Superforms in action**  📲


<img src="docs/superform.gif" width="300" height="600" style=" border-radius:3px; margin-top: 10px; margin-bottom:10px "/>


<br/>




<br/>

## **Installation**  🏗️

```bash
npm i @superforms/superforms-rn
```
**Note:** Make sure to have react version ```>=16.13.1```


## **Date Picker Usage**  📅

```bash
npm i react-native-date-picker
``````
This packge is a peer dependency that you must have to use ```<FormDateSelector/>```, you can skip this if you do not need the date picker, but it would be great to install this so that you do not run into issues later. 

<br/>

<br/>

## **How it works** 💻

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


<br/>

## **Components Props** 📦

  <br/>

* ### **Form**

    <br/>


    | Property | Type | Description | Required 
    | ----------- | :----: |:-------------- | :------------|
    | initialValues  | ```FormikValues```  | These are the initial values for the form.            | Yes
    | validationSchema  | ```Object```  |  The validation scheme for you form values this needs to be initialized as through ``` Yup.Object().shape({})```. | Yes
    | enableReinitialize  | ```Boolean```  |  Control whether Formik should reset the form if the wrapped component props change ```using deep equality```. | No

    <br/>

* ### **FormField**

    <br/>

    | Property | Type | Description | Required 
    | ----------- | :----: |:-------------- | :------------|
    | name  | ```String```  | The name of the form field, it could be any string value.            | Yes

    ``` More <FormField/> ``` [props](docs/components.md)

    <br/>


* ### **Submit Button**

    <br/>

    | Property | Type | Description | Required 
    | ----------- | :----: |:-------------- | :------------|
    | name  | ```String```  | The name of the button, it could be any string value.            | Yes

    ``` More <SubmitButton/> ``` [props](docs/components.md)

    <br/>



## **Contributers** 😎

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/AbdullahQureshi1080"><img src="https://avatars.githubusercontent.com/u/55753562?s=400&u=97e2fffdc0b41fc7d0dec0c4ea3c19f17303ece6&v=4" width="100px;" alt=""/><br /><sub><b>Abdullah Najam Qureshi</b></sub></a><br /><a href="#question-abdullahqureshi1080" title="Answering Questions">💬</a> <a href="https://github.com/AbdullahQureshi1080/superforms-rn/commits/docs?author=abdullahqureshi1080" title="Documentation">📖</a> <a href="https://github.com/AbdullahQureshi1080/superforms-rn/pulls?q=is%3Apr+closed+reviewed-by%3A%40me+" title="Reviewed Pull Requests">👀</a> 
   <a href="#maintenance-abdullahqureshi1080" title="Maintenance">🚧</a> <a href="https://github.com/AbdullahQureshi1080/superforms-rn/commits?author=abdullahqureshi1080" title="Code">💻</a> <a href="#design-abdullahqureshi1080" title="Design">🎨</a></td>
      <td align="center"><a href="https://github.com/Faseeh-Abbas-Khan"><img src="https://avatars.githubusercontent.com/u/33255564?v=4" width="100px;" alt=""/><br /><sub><b>Faseeh Abbas Khan</b></sub></a><br /><a href="#question-faseehabbas" title="Answering Questions">💬</a> <a href="https://github.com/AbdullahQureshi1080/superforms-rn/commits/docs?author=Faseeh-Abbas-Khan" title="Documentation">📖</a> 
     <a href="#maintenance-faseehabbas" title="Maintenance">🚧</a> <a href="https://github.com/AbdullahQureshi1080/superforms-rn/commits?author=Faseeh-Abbas-Khan" title="Code">💻</a> <a href="#design-faseehabbas" title="Design">🎨</a></td>
    </tr>
    <tr>

  </tbody>
</table>

<br/>


## **In Progress** 🚧 👷

  * More Form Components
    * Dropdown Picker
    * Country Picker
    * Date Picker
    * Modal Picker
    * Radio Form
    * Checkboxes
    * Image Picker


## **Worked On** ✅

  * TDD: Test cases 
  * Docs support 
  * Refactoring ~ making all unnecesary props as optional 

  **Note:** Open to suggestions, if there is anything specific you want with a form component, let us know. 

<br/>


## **Contributing**  💗

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'feat: Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<br/>

## **Acknowledgments**

* [**Formik**](https://github.com/jaredpalmer/formik)
* [**Yup**](https://github.com/jquense/yup)

<br/>

## **Consider supporting with a ⭐️ on GitHub**

If you find ```@superforms``` helpful a star would be awesome, we appreciate the support and motivation. 
