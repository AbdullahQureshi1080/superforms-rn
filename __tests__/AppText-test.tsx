/**
 * @format
 */

import React from "react";
import "react-native";

jest.useFakeTimers();
jest.mock("Dimensions");

// Note: test renderer must be required after react-native.
import { render } from "@testing-library/react-native";

import AppText from "../src/Common/Text/AppText";

describe("AppText", () => {
  const dummyText = "Label";
  test("AppText Render Correctly", () => {
    render(<AppText>{dummyText}</AppText>);
  });
});
