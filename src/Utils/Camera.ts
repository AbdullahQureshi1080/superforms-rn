import { PermissionsAndroid, Platform, Rationale, Alert } from "react-native";
import {
  launchImageLibrary,
  MediaType,
  PhotoQuality,
  ImagePickerResponse,
} from "react-native-image-picker";

const requestCameraPermission = async (alertConfig: Rationale) => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        alertConfig
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};

const requestExternalWritePermission = async (alertConfig: Rationale) => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        alertConfig
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};

const alertConfigCamera = {
  title: "Camera Permission",
  message: "App needs camera permission",
  buttonPositive: "Ok",
};

const alertConfigStorage = {
  title: "External Storage Write Permission",
  message: "App needs write permission",
  buttonPositive: "Ok",
};

export interface launchConfig {
  mediaType: MediaType;
  maxWidth: number;
  maxHeight: number;
  quality: PhotoQuality;
  saveToPhotos: boolean;
  durationLimit: number;
  callback: (
    e: React.ChangeEvent | string | ImagePickerResponse
  ) => void | undefined;
  setImageURI: (e: string | undefined) => void;
  disableFeedbackAlerts: boolean;
}

const selectImageFromLibrary = async (options: launchConfig) => {
  let isCameraPermitted = await requestCameraPermission(alertConfigCamera);
  let isStoragePermitted = await requestExternalWritePermission(
    alertConfigStorage
  );
  if (isCameraPermitted && isStoragePermitted) {
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (!options.disableFeedbackAlerts) {
        if (response.didCancel) {
          Alert.alert("User cancelled camera picker");
          return;
        } else if (response.errorCode === "camera_unavailable") {
          Alert.alert("Camera not available on device");
          return;
        } else if (response.errorCode === "permission") {
          Alert.alert("Permission not satisfied");
          return;
        } else if (response.errorCode === "others") {
          Alert.alert(response.errorMessage as string);
          return;
        }
      }
      console.log("RESPONE FROM LAUNCH LIBRARY OPTION", response);
      options.callback(response as ImagePickerResponse);
      if (response && response.assets?.length) {
        options.setImageURI(response.assets[0].uri);
      }
    });
  }
};

export {
  requestCameraPermission,
  requestExternalWritePermission,
  alertConfigCamera,
  alertConfigStorage,
  selectImageFromLibrary,
};
