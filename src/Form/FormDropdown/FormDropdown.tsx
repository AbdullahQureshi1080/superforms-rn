// Native Imports
import React from "react";

// Supporting Imports
import { useFormikContext } from "formik";

import DropdownPicker, { DropDownProps } from "../../Common/Dropdown/Dropdown";

export interface FormDropdownProps extends DropDownProps {
  name: string;
}

const FormDropdown = (props: FormDropdownProps) => {
  const { name, testID } = props;
  const { setFieldTouched, touched, setFieldValue, errors, values } =
    useFormikContext();

  return (
    <DropdownPicker
      {...props}
      // @ts-ignore
      onBlur={() => {
        setFieldTouched(name);
      }}
      onSelect={(val) => {
        setFieldValue(name, val);
      }}
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

export default FormDropdown;
