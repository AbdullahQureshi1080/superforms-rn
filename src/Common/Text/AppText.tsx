// React Imports
import {Text, StyleProp, TextProps} from 'react-native';
import React, {ReactNode} from 'react';

// Styles Import
import styles from './AppTextStyles';

export interface CTextProps extends TextProps {
  children?: ReactNode;
  textStyle?: StyleProp<any>;
}

const AppText = (props: CTextProps) => {
  const {children, textStyle} = props;
  return (
    <Text {...props} style={[styles.text, textStyle]}>
      {children}
    </Text>
  );
};

export default AppText;
