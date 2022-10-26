// Native Imports
import React from "react";

// Supporting Imports
import { useFormikContext } from "formik";

import Input, { InputProps } from "../../Common/Input/Input";

export interface FormFieldProps extends InputProps {
  name: string;
}

const FormField = (props: FormFieldProps) => {
  const { name, testID } = props;
  const { setFieldTouched, touched, handleChange, errors, values } =
    useFormikContext();

  return (
    <Input
      {...props}
      // @ts-ignore
      onBlur={() => {
        setFieldTouched(name);
      }}
      onChangeText={handleChange(name)}
      // @ts-ignore
      value={values[name]}
      // @ts-ignore
      errorMessage={errors[name]}
      // @ts-ignore
      errorVisibility={touched[name]}
      testID={testID}
    />
  );
};

export default FormField;
