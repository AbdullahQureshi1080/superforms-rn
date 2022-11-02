// Native Imports
import React from "react";

// Supporting Imports
import { useFormikContext } from "formik";

import DatePicker, { DTProps } from "../../Common/Date/DatePicker";

export interface FormDateSelectorProps extends DTProps {
  name: string;
}

const FormDateSelector = (props: FormDateSelectorProps) => {
  const { name, testID } = props;
  const { setFieldValue, touched, errors, values } = useFormikContext();

  return (
    <DatePicker
      {...props}
      onDateChange={(date: Date) => {
        setFieldValue(name, date);
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

export default FormDateSelector;
