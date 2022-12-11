/**
 * @format
 */

import React from "react";
import "react-native";

jest.useFakeTimers();
jest.mock("react-native-image-picker");

// Note: test renderer must be required after react-native.
// import { fireEvent, render } from "@testing-library/react-native";

import ImagePicker from "../src/Common/Image/ImagePicker";

describe("ImagePicker", () => {
  const mockChange = jest.fn();
  test("ImagePicker Renders Correctly", () => {
    <ImagePicker mediaType="photo" onChange={mockChange} imageStyles={{}} />;
  });
});
