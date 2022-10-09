// Native Imports
import React, {ReactNode} from 'react';

// Formik Imports
import {Formik, FormikHelpers, FormikValues} from 'formik';

export interface FormProps {
  initialValues: FormikValues;
  validationSchema: Object;
  children: ReactNode;
  onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<any>) => void;
  enableReinitialize: boolean;
}

const Form = (props: FormProps) => {
  const {
    initialValues,
    validationSchema,
    children,
    onSubmit,
    enableReinitialize,
  } = props;
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
