/**
 * @format
 */

import React from "react";
import "react-native";

jest.setTimeout(100000);

jest.useFakeTimers();

jest.mock("Dimensions");
// jest.mock("formik");

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// Note: test renderer must be required after react-native.
import { fireEvent, render } from "@testing-library/react-native";

// Supporting Imports
import * as Yup from "yup";

import Form from "../src/Form/Form";
import FormField from "../src/Form/FormField/FormField";
import SubmitButton from "../src/Form/SubmitButton/SubmitButton";

describe("Form", () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email().label("Email"),
    password: Yup.string()
      .required("Password is required")
      .label("Password")
      .min(5),
    fullName: Yup.string().required("Name is required").label("Full Name"),
  });
  const mockSubmitHandler = jest.fn();

  test("Success: Form Renders correctly", () => {
    const { getByTestId } = render(
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={mockSubmitHandler}
        enableReinitialize={true}
      >
        <FormField
          name="email"
          label="Email"
          placeholder="email"
          testID="email-test-field"
        />
        <FormField
          name="password"
          label="Password"
          placeholder="password"
          testID="password-test-field"
        />
        <FormField
          name="fullName"
          label="Full Name"
          placeholder="fullName"
          testID="fullname-test-field"
        />
        <SubmitButton
          name="Login"
          testID="submit-test-button"
          useSubmitForm={true}
          onPress={mockSubmitHandler}
        />
      </Form>
    );
    const emailField = getByTestId("email-test-field");
    fireEvent.changeText(emailField, "test@gmail.com");
    const passwordField = getByTestId("password-test-field");
    fireEvent.changeText(passwordField, "Test12345@");
    const nameField = getByTestId("fullname-test-field");
    fireEvent.changeText(nameField, "Tony Alveraz");
    const submitButton = getByTestId("submit-test-button");
    // const button = getByTestId("test-button");
    fireEvent.press(submitButton);
    // fireEvent.press(button);
    // expect(mockButton).toHaveBeenCalledTimes(1);
    // expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
  });
});
