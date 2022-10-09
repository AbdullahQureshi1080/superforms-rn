// Native Imports
import React from 'react';

// Supporting Imports
import {useFormikContext} from 'formik';

// Styles Import
import Button, {ButtonProps} from '../../Common/Button/Button';

export interface SubmitButtonProps extends ButtonProps {
  // name: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const {handleSubmit} = useFormikContext();
  const {name} = props;

  return <Button {...props} name={name} onPress={handleSubmit} />;
};

export default SubmitButton;
