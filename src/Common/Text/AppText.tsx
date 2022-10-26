// React Imports
import { Text, StyleProp, TextProps } from "react-native";
import React, { ReactNode } from "react";

// Styles Import
import styles from "./AppTextStyles";

export interface CTextProps extends TextProps {
  children?: ReactNode;
  textStyle?: StyleProp<any>;
  testID?: string;
}

const AppText = (props: CTextProps) => {
  const { children, textStyle, testID } = props;
  return (
    <Text {...props} style={[styles.text, textStyle]} testID={testID}>
      {children}
    </Text>
  );
};

export default AppText;
