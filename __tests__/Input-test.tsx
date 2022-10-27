/**
 * @format
 */

import React from "react";
import "react-native";

jest.useFakeTimers();
jest.mock("Dimensions");

// Note: test renderer must be required after react-native.
import { fireEvent, render } from "@testing-library/react-native";

import Input from "../src/Common/Input/Input";
import { View } from "react-native";

describe("Input", () => {
  const label = "Email";
  const placeholder = "email";
  const email = "test@gmail.com";
  test("Input Renders Correctly", () => {
    const mockOnChangeText1 = jest.fn();
    const mockOnChangeText2 = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <View>
        <Input
          label={label}
          placeholder={placeholder}
          onChangeText={mockOnChangeText1}
        />
        <Input
          label={label}
          onChangeText={mockOnChangeText2}
          testID={"test-input-01"}
        />
      </View>
    );
    const input = getByPlaceholderText(placeholder);
    const inputByTest = getByTestId("test-input-01");
    fireEvent.changeText(input, email);
    fireEvent.changeText(inputByTest, email);
    expect(mockOnChangeText1).toHaveBeenCalledWith(email);
    expect(mockOnChangeText2).toHaveBeenCalledWith(email);
  });
});
