import { StyleProp } from "react-native";

export interface BaseProps {
    errorMessage?: string | undefined ;
    errorVisibility?: boolean |  undefined ;
    showErrorMessage?: boolean;
    label?: string;
    containerStyle?: StyleProp<any>;
    labelStyle?: StyleProp<any>;
    contentStyle?: StyleProp<any>;
    disabled?: boolean;
    hideLabel?: boolean;
    assistiveText?: string;
    assistiveTextStyle?: StyleProp<any>;
    testID?:string
    placeholder?: string;
    placeholderColor?:string;
  }