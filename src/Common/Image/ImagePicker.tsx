import React, { useEffect, useState } from "react";

import {
  StyleProp,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Alert,
  ImageProps,
} from "react-native";

const CamerIcon = require("../../assets/images/camera-icon.png");

import {
  ImageLibraryOptions,
  CameraOptions,
  ImagePickerResponse,
} from "react-native-image-picker";

import {
  alertConfigCamera,
  alertConfigStorage,
  requestCameraPermission,
  requestExternalWritePermission,
  selectImageFromLibrary,
} from "../../Utils/Camera";

import { colors } from "../../assets/colors";
import { BaseProps } from "../../Utils/BaseProps";
import styles from "./ImagePickerStyles";

export interface ImagePickerProps
  extends ImageLibraryOptions,
    CameraOptions,
    BaseProps {
  imageUri?: string;
  name?: string;
  onChange: (
    e: React.ChangeEvent | string | ImagePickerResponse
  ) => void | undefined;
  imageProps?: ImageProps;
  imageStyles?: StyleProp<any>;
  placeholderImage?: string;
  placeholderImageStyles?: StyleProp<any>;
  disableFeedbackAlerts?: boolean;
}

const ImagePicker = (props: ImagePickerProps) => {
  const {
    containerStyle,
    labelStyle,
    disabled = false,
    label,
    hideLabel = false,
    errorMessage,
    errorVisibility = true,
    showErrorMessage = true,
    assistiveText,
    assistiveTextStyle,
    onChange,
    imageUri,
    mediaType,
    maxWidth = 500,
    maxHeight = 500,
    quality = 0.6,
    saveToPhotos = false,
    durationLimit = 30,
    videoQuality,
    imageProps,
    imageStyles,
    placeholderImage,
    placeholderImageStyles,
    disableFeedbackAlerts = true,
  } = props;

  const [imageURI, setImageURI] = useState<string | undefined>(
    imageUri ? imageUri : ""
  );

  const selectImageConfig = {
    mediaType,
    maxWidth,
    maxHeight,
    quality,
    saveToPhotos,
    durationLimit,
    videoQuality,
    callback: onChange,
    setImageURI: (uri: string | undefined) => setImageURI(uri),
    disableFeedbackAlerts: disableFeedbackAlerts,
  };

  useEffect(() => {
    requestCameraPermission(alertConfigCamera);
    requestExternalWritePermission(alertConfigStorage);
  }, []);

  const errorStyle = (ev: boolean, em: string | undefined): StyleProp<any> => {
    const borderColor = ev && em ? colors.error : colors.grey;
    return { ...styles.containerStyle, borderColor };
  };

  const handlePress = () => {
    if (!imageURI) selectImageFromLibrary(selectImageConfig);
    else
      Alert.alert("Delete", "Are you sure you want to delete the image?", [
        {
          text: "Yes",
          onPress: () => {
            setImageURI("");
            onChange("");
          },
        },
        { text: "No" },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} disabled={disabled}>
      <View
        style={[
          styles.containerStyle,
          containerStyle,
          errorStyle(errorVisibility, errorMessage),
        ]}
      >
        {hideLabel || !label ? null : (
          <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
        )}
        <Image
          {...imageProps}
          source={
            imageURI
              ? { uri: imageURI }
              : placeholderImage
              ? placeholderImage
              : CamerIcon
          }
          style={
            imageURI
              ? [styles.imageStyles, imageStyles]
              : [styles.placeholderImageStyles, placeholderImageStyles]
          }
        />
        {assistiveText && !errorVisibility ? (
          <Text style={[styles.assistiveTextStyle, assistiveTextStyle]}>
            {assistiveText}
          </Text>
        ) : null}
        {errorVisibility && showErrorMessage && errorMessage ? (
          <Text style={[styles.errorText, assistiveTextStyle]}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImagePicker;
