/**
 * @format
 */

import React from "react";
import "react-native";

jest.useFakeTimers();
jest.mock("Dimensions");

// Note: test renderer must be required after react-native.
import { fireEvent, render, screen } from "@testing-library/react-native";

import Button from "../src/Common/Button/Button";
import { View } from "react-native";

describe("Button", () => {
  const name1 = "Submit";
  const name2 = "SubmitTwo";
  const testID = "button-test-01";
  const mockOnPress1 = jest.fn();
  const mockOnPress2 = jest.fn();
  test("Button Renders Correctly", () => {
    render(
      <View>
        <Button name={name1} onPress={() => mockOnPress1("pressed 1")} />
        <Button
          name={name2}
          onPress={() => mockOnPress2("pressed 2")}
          testID={testID}
        />
      </View>
    );
    fireEvent.press(screen.getByText(name1));
    fireEvent.press(screen.getByTestId(testID));
    expect(mockOnPress1).toHaveBeenCalledWith("pressed 1");
    expect(mockOnPress2).toHaveBeenCalledWith("pressed 2");
  });
});
