import {View, TextInput, StyleProp} from 'react-native';
import React, {ReactNode} from 'react';

// Styles Import
import styles from './InputStyles';
import {colors} from '../../assets/colors';
import AppText from '../Text/AppText';

export interface InputProps {
  value?: string;
  onChangeText?: (e: React.ChangeEvent | string) => void;
  editable?: boolean;
  label?: string;
  labelStyle?: StyleProp<any>;
  containerStyle?: StyleProp<any>;
  assistiveTextStyle?: StyleProp<any>;
  inputStyle?: StyleProp<any>;
  hideLabel?: boolean;
  autoFocus?: boolean;
  assistiveText?: string;
  renderIcon?: () => ReactNode;
  iconPlacement?: 'LEFT' | 'RIGHT';
  placeholder?: string;
  errorMessage?: string;
  errorVisibility?: boolean;
  showErrorMessage?: boolean;
}

const Input = (props: InputProps) => {
  const {
    value,
    onChangeText,
    editable,
    label,
    containerStyle,
    labelStyle,
    hideLabel,
    autoFocus = false,
    assistiveText,
    assistiveTextStyle,
    renderIcon,
    iconPlacement = 'LEFT',
    placeholder = label,
    errorMessage,
    errorVisibility,
    showErrorMessage = true,
    inputStyle,
  } = props;

  const styleInputWithIcon: StyleProp<any> = {
    flexDirection: iconPlacement === 'RIGHT' ? 'row-reverse' : 'row',
    alignItems: 'center',
  };

  const styleInputWithError: StyleProp<any> = {
    borderColor: errorVisibility && errorMessage ? colors.error : colors.grey,
  };

  return (
    <View style={[styles.containerStyle, styleInputWithError, containerStyle]}>
      {hideLabel ? null : (
        <AppText textStyle={[styles.labelStyle, labelStyle]}>{label}</AppText>
      )}
      <View style={[styles.contentContainer, styleInputWithIcon]}>
        {renderIcon ? renderIcon() : null}
        <TextInput
          {...props}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          style={[styles.inputStyle, inputStyle]}
          cursorColor={styles.cursor.color}
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
        />
      </View>
      {assistiveText && !errorVisibility ? (
        <AppText textStyle={[styles.assistiveTextStyle, assistiveTextStyle]}>
          {assistiveText}
        </AppText>
      ) : null}
      {errorVisibility && showErrorMessage ? (
        <AppText textStyle={[styles.errorText, assistiveTextStyle]}>
          {errorMessage}
        </AppText>
      ) : null}
    </View>
  );
};

export default Input;
