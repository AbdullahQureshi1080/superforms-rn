

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


## **Image Picker Usage**  🖼️

```bash
npm i react-native-image-picker
``````

Note: To use  ```<FormDate/>``` or ```<FormImage/>``` you must have to install either of the dependent libraries, you can skip it if you do not need the image picker or the date picker, but it would be great to install these so that you do not run into issues later. 


<br/>


## **How it works** 💻

```js
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Form,
  FormField,
  SubmitButton,
  FormDateSelector,
  DatePickerEnums,
  FormImageSelector,
  ImagePickerEnums,
} from '@superforms/superforms-rn';
import * as Yup from 'yup';

const App = () => {
   const [values, setValues] = useState<FormikValues>({});

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

  const handleSubmit = (values) => {
    console.log('Values', values);
  };

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

  return (
    <SafeAreaView style={{backgroundColor: '#f8f8f8', flex: 1}}>
     <Form
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}>
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        <FormField name="fullName" label="Full Name" />
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
          imageUri={values.imagepicker}
        />
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


    | Property | Type | Description | Required 
    | ----------- | :----: |:-------------- | :------------|
    | initialValues  | ```FormikValues```  | These are the initial values for the form.            | Yes
    | validationSchema  | ```Object```  |  The validation scheme for you form values this needs to be initialized as through ``` Yup.Object().shape({})```. | Yes
    | enableReinitialize  | ```Boolean```  |  Control whether Formik should reset the form if the wrapped component props change ```using deep equality```. | No

    <br/>

* ### **FormField**

    | Property | Type | Description | Required 
    | ----------- | :----: |:-------------- | :------------|
    | name  | ```String```  | The name of the form field, it could be any string value.            | Yes

    ``` More <FormField/> ``` [props](docs/components.md)

    <br/>


* ### **FormDate**


  | Property | Type | Description | Required 
  | ----------- | :----: |:-------------- | :------------|
  | name  | ```String```  |  The name of the form field, it could be any string value.             | Yes
  | date  | ```Date```  | The initial date for the date picker to begin with. This can be any  ```new Date()``` object.  | Yes

  ``` More <FormDateSelector/> ``` [props](docs/components.md)

 
 
<br/>

* ### **FormImage**


  | Property | Type | Description | Required 
  | ----------- | :----: |:-------------- | :------------|
  | name  | ```String```  |  The name of the form field, it could be any string value.             | Yes
  | getCompletePickerData  | ```Boolean```  | With this prop you can get the complete picker response. By default only the image URI is returned   | No

  ``` More <FormImageSelector/> ``` [props](docs/components.md)

 
 
<br/>


* ### **FormDropdown**


  | Property | Type | Description | Required 
  | ----------- | :----: |:-------------- | :------------|
  | name  | ```String```  |  The name of the form field, it could be any string value.             | Yes
  | items  | ```Array```  |  The items for the dropdown picker          | Yes
  

  ``` More <FormDropdown/> ``` [props](docs/components.md)

 
 
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
      <td align="center"><a href="https://github.com/Faseeh-Abbas-Khan"><img src="https://avatars.githubusercontent.com/u/33255564?v=4" width="100px;" alt=""/><br /><sub><b>Faseeh Abbas Khan</b></sub></a><br />
     <a href="#maintenance-faseehabbas" title="Maintenance">🚧</a> <a href="https://github.com/AbdullahQureshi1080/superforms-rn/commits?author=Faseeh-Abbas-Khan" title="Code">💻</a> </td>
    </tr>
    <tr>

  </tbody>
</table>

<br/>

## **In Progress** 🚧 👷
#### More Form Components
* Country Picker
* Modal Picker
* Radio Form
* Checkboxes



## **Worked On** ✅
* Dropdown Picker
* Image Picker
* Date Picker
* TDD: Test cases 
* Docs support 
* Refactoring ~ Making all unnecesary props as optional 

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
