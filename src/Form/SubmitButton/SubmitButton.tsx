// Native Imports
import React from "react";

// Supporting Imports
import { useFormikContext } from "formik";

// Styles Import
import Button, { ButtonProps } from "../../Common/Button/Button";
import { GestureResponderEvent } from "react-native";

export interface SubmitButtonProps extends ButtonProps {
  useSubmitForm?: boolean;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { handleSubmit, submitForm } = useFormikContext();
  const { name, testID, useSubmitForm } = props;

  const handleNativeSubmit = (event: GestureResponderEvent) => {
    // Prevent default behavior if necessary
    event.preventDefault?.();
    handleSubmit(); // Call Formik's handleSubmit
  };


  return (
    <Button
      {...props}
      name={name}
      onPress={useSubmitForm ? submitForm : handleNativeSubmit}
      testID={testID}
    />
  );
};

export default SubmitButton;
