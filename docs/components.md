# **Components Props**

## **Form**

| Property | Type | Description | Required 
| ----------- | :----: |:-------------- | :------------|
| initialValues  | ```FormikValues or Object```  | These are the initial values for the form.            | Yes
| validationSchema  | ```Object```  |  The validation scheme for you form values this needs to be initialized as through ``` Yup.Object().shape({})```. | Yes
| enableReinitialize  | ```Boolean```  |  Control whether Formik should reset the form if the wrapped component props change ```using deep equality```. | No


## **Form Field**


| Property | Type | Description | Required 
| ----------- | :----: |:-------------- | :------------|
| name  | ```String```  | The name of the form field, it could be any string value.            | Yes
| label  | ```String``` | The label for the input field     | No
| renderIcon  |  ```()=><ReactNode/>``` | With this prop you can render a Icon within the formfield besides the input.    | No
| iconPlacement  |  ```LEFT or RIGHT``` | With this prop you can position the icon either on th left or the right side of the input field. Default value is ```LEFT```    | No
| placeholder  |  ```String``` | The placeholder value for the form field.    | No
| inputStyle  | ```StyleProp<any>```  | The styles for form ```<TextInput/>```  | No | [Styles](../src/Common/Input/InputStyles.tsx)



**Note:** Other than these custom props, all the props for ```<TextInput/>``` are supported, but as  ```value``` and ```onChangeText``` are configured to automatically get, set and update, you cannot use these. 


<br/>

## **Form Date**
| Property | Type | Description | Required 
| ----------- | :----: |:-------------- | :------------|
| name  | ```String```  | The name of the form field, it could be any string value.            | Yes
| date  | ```Date```  |The initial date for the date picker to begin with. This can be any  ```new Date()``` object.| Yes
| dateFormat  | ```String```  | This can be any [moment](https://momentjs.com/) formated [value](https://momentjs.com/docs/#/parsing/string-format/). | No
| mode  | ```String```  | Modes can be of three types, ```date, datetime``` or ```time```, if you like you can use these [enums](../src/Common/Date/DatePickerEnums.ts), ```Default``` mode is ```date``` | No
| placeholderStyle  | ``StyleProp<any>``  | Styles for placeholder of the form date selector | No

<br/>

## **Form Image**
| Property | Type | Description | Required 
| ----------- | :----: |:-------------- | :------------|
| name  | ```String```  | The name of the form field, it could be any string value.            | Yes
| mediaType  | ```photo / video /  mixed```  | These can be the three types either a photo, video or mixed | Yes
| onChange  | ```callback function```  | This function can retrive the value from the image picker whenever there is a new value | No
| imageProps  | ```Object```  | These are be the props that are supported by the [image](https://reactnative.dev/docs/image) component of react-native | No
| disableFeedbackAlerts  | ```Boolean```  | The feedback alerts from the image picker, the deafult value is ```true``` | No
| placeholderImage  | ```string```  | The image placholder string, it is a local asset  | No
| placeholderImageStyles  | ```Object```  | The styles object for image placeholder | No
| imageStyles  | ```Object```  | The styles object for image | No

**Note:** All the [image picker properties](https://github.com/react-native-image-picker/react-native-image-picker) are also supported such as maxWidth, maxHeight, quality etc, 


<br/>


## **FormDropdown**


| Property | Type | Description | Required 
| ----------- | :----: |:-------------- | :------------|
| name  | ```String```  |  The name of the form field, it could be any string value.             | Yes
| items  | ```Array```  |  The items for the dropdown picker          | Yes
| onChange  | ```callback function```  | This function can retrive the value from the dropdown picker whenever there is a new value | No
| onSelect  | ```callback function```  | This function can retrive the value from the dropdown picker whenever there is a new value, this is used internally for updating form-state | No
| dropDownContainerStyle  | ```Object```  | The styles object for dropdown container  | No
| listItemContainerStyle  | ```Object```  | The styles object for list item container  | No
| style  | ```Object```  | The styles object for dropdown style  | No
| dropDownPickerProps  | ```Object```  | The dropdown [props](https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage) availble for the picker from the picker library | No

<br/>

## **Submit Button**

<!-- * ### **Funtional Props** -->

| Property | Type | Description | Required 
| ----------- | :----: |:-------------- | :------------|
| name  | ```String```  | The name of the button, it could be any string value.            | Yes    
| type  | ```String``` | The type of the button, this translates to button size mainly affecting the width of the button, you can set it by using [button enums](../src/Common/Button/ButtonEnums.ts).   | No 
| disabled  | ```Boolean``` | The prop that disables interactions for the button  | No 
| loading  | ```Boolean``` | The prop that adds a ```<ActivityIndicator/>``` to the button, this can be used when to show progress for the form submit action | No    
| renderIcon  |  ```()=><ReactNode/>``` | With this prop you can render a Icon within the form button.    | No
| iconPlacement  |  ```LEFT or RIGHT``` | With this prop you can position the icon either on the left or the right side of the form button.  Default value is ```RIGHT```.   |  No
| iconOnly  |  ```Boolean``` | With this prop you can only show icon on the form submit button. **Note:** please make sure to render a icon if this is true otherwise the form button will throw a warning but yes it should work.  | No
| useSubmitForm  |  ```Boolean``` | Instead of using formik's handle submit use submitForm instead  | No
| contentStyle  | ```StyleProp<any>```  | The styles for the inner content of the form button such as icon or the button label/name view.  | No | [Styles](../src/Common/Input/InputStyles.tsx)


**Note:** Other than these custom props, all the props for ```<TouchableOpacity/>``` are supported, but as  ```onPress```  is configured to handle form submit you cannot use this. 

<br>

## **Common Field Props**
| Property | Type | Description | Required 
| ----------- | :----: |:-------------- | :------------|
| labelStyle  | ```StyleProp<any>```  | The styles for the form label   | No | [Styles](../src/Common/Input/InputStyles.tsx)
| containerStyle  | ```StyleProp<any>```  | The styles for form input container, the ```<TextInput/>``` is inside a ```View``` with these styles.  | No | [Styles](../src/Common/Input/InputStyles.tsx)
| inputStyle  | ```StyleProp<any>```  | The styles for form ```<TextInput/>```  | No | [Styles](../src/Common/Input/InputStyles.tsx)
| assistiveTextStyle  | ```StyleProp<any>```  | The styles for assistive text or error message. | No | [Styles](../src/Common/Input/InputStyles.tsx
| showErrorMessage  |  ```Boolean``` | The prop to hide the error message of the form field, although with this there will be no error message but still the form field will be highlighted in error state if there is a validation error.  | No
| assistiveText  |  ```String``` | The prop to show assistive text under the text input, the error message overrides the assistive text when there is a validation error. | No
| placeholder  |  ```String``` | The placeholder for form fields | No
| placeholderColor  |  ```String``` | Any hex ```code```, ```Default``` value is ```#929AAB```  | No
| hideLabel  |  ```Boolean``` | The prop to hide label for a form field, though you do not need this if you do not give a label but for a case where you do but still want to hide it, sounds silly but you have it.     | No
| label  | ```String``` | The label for the form field     | No
| disabled  | ```Boolean``` | The prop that disables interactions for the field  | No 

