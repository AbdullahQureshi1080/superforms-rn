// Native Imports
import React from "react";

// Supporting Imports
import { useFormikContext } from "formik";

import ImagePicker, { ImagePickerProps } from "../../Common/Image/ImagePicker";

export interface FormImageSelectorProps extends ImagePickerProps {
  name: string;
  getCompletePickerData?: boolean;
}

const FormImageSelector = (props: FormImageSelectorProps) => {
  const { name, testID, onChange, getCompletePickerData } = props;
  const { setFieldValue, touched, errors, values } = useFormikContext();

  return (
    <ImagePicker
      {...props}
      onChange={(res) => {
        if (res && res.assets?.length) {
          onChange?.(res);
          if (getCompletePickerData) {
            return setFieldValue(name, res.assets[0]);
          }
          return setFieldValue(name, res.assets[0].uri);
        }
        setFieldValue(name, "");
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

export default FormImageSelector;
