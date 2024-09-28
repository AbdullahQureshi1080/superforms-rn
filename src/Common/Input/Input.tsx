import { View, TextInput, StyleProp, TextInputProps } from "react-native";
import React, { ReactNode } from "react";

// Styles Import
import styles from "./InputStyles";
import { colors } from "../../assets/colors";
import AppText from "../Text/AppText";
import { errorStyle } from "../../Styles/BaseStyles";
import { BaseProps } from "../../Utils/BaseProps";

export interface InputProps extends BaseProps, TextInputProps {
  value?: string;
  onChangeText?: (e: React.ChangeEvent | string) => void;
  editable?: boolean;
  inputStyle?: StyleProp<any>;
  autoFocus?: boolean;
  renderIcon?: () => ReactNode;
  iconPlacement?: "LEFT" | "RIGHT";
}

const Input = (props: InputProps) => {
  const {
    value,
    onChangeText,
    disabled,
    label,
    containerStyle,
    labelStyle,
    hideLabel,
    autoFocus = false,
    assistiveText,
    assistiveTextStyle,
    renderIcon,
    iconPlacement = "LEFT",
    placeholder = label,
    errorMessage,
    errorVisibility,
    showErrorMessage = true,
    inputStyle,
    testID,
    placeholderColor = colors.grey,
  } = props;

  const styleInputWithIcon: StyleProp<any> = {
    flexDirection: iconPlacement === "RIGHT" ? "row-reverse" : "row",
    alignItems: "center",
  };

  return (
    <View
      style={[
        styles.containerStyle,
        errorStyle(errorVisibility, errorMessage),
        containerStyle,
      ]}
    >
      {hideLabel ? null : (
        <AppText textStyle={[styles.labelStyle, labelStyle]}>{label}</AppText>
      )}
      <View style={[styles.contentContainer, styleInputWithIcon]}>
        {renderIcon ? renderIcon() : null}
        <TextInput
          {...props}
          value={value}
          onChangeText={onChangeText}
          editable={!disabled}
          style={[styles.inputStyle, inputStyle]}
          cursorColor={styles.cursor.color}
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          testID={testID}
        />
      </View>
      {assistiveText && !errorVisibility ? (
        <AppText textStyle={[styles.assistiveTextStyle, assistiveTextStyle]}>
          {assistiveText}
        </AppText>
      ) : null}
      {errorVisibility && showErrorMessage && errorMessage ? (
        <AppText textStyle={[styles.errorText, assistiveTextStyle]}>
          {errorMessage}
        </AppText>
      ) : null}
    </View>
  );
};

export default Input;
