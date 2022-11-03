/**
 * @format
 */

import React from "react";
import "react-native";

// jest.useFakeTimers();
jest.mock("Dimensions");

// Note: test renderer must be required after react-native.
import { render } from "@testing-library/react-native";

import { View } from "react-native";

describe("Date", () => {
  test("Date Picker Renders Correctly", () => {
    render(<View testID="date-picker-test"></View>);
  });
});
