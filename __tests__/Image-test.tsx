/**
 * @format
 */

import React from "react";
import "react-native";

jest.useFakeTimers();
jest.mock("Dimensions");

// Note: test renderer must be required after react-native.
import { fireEvent, render } from "@testing-library/react-native";

import ImageInput from "../src/Common/Image/ImagePicker";

describe("ImagePicker", () => {
  const mockChange = jest.fn();
  test("ImagePicker Renders Correctly", () => {
    <ImageInput imageUri={""} onChangeImage={mockChange} style={{}} />;
  });
});
