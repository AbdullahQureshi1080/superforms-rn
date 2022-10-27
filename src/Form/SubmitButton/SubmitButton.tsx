// Native Imports
import React from "react";

// Supporting Imports
import { useFormikContext } from "formik";

// Styles Import
import Button, { ButtonProps } from "../../Common/Button/Button";

export interface SubmitButtonProps extends ButtonProps {
  useSubmitForm?: boolean;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { handleSubmit, submitForm } = useFormikContext();
  const { name, testID, useSubmitForm } = props;

  return (
    <Button
      {...props}
      name={name}
      onPress={useSubmitForm ? submitForm : handleSubmit}
      testID={testID}
    />
  );
};

export default SubmitButton;
