import {
  View,
  StyleProp,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
  TouchableOpacityProps,
  Dimensions,
} from 'react-native';
import React, {ReactNode, useEffect} from 'react';

// Styles Import
import styles from './ButtonStyles';
import {colors} from '../../assets/colors';
import {Generic} from '../../assets/enums/Generic';
import {ButtonEnums} from './ButtonEnums';
import AppText from '../Text/AppText';

export interface ButtonProps extends TouchableOpacityProps {
  containerStyle?: StyleProp<any>;
  labelStyle?: StyleProp<any>;
  contentStyle?: StyleProp<any>;
  name: string;
  disabled?: boolean;
  loading?: boolean;
  renderIcon?: () => ReactNode;
  type?: string;
  errorVisibility?: boolean;
  iconPlacement?: 'LEFT' | 'RIGHT';
  onPress?: (event: GestureResponderEvent) => void;
  iconOnly?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    containerStyle,
    labelStyle,
    contentStyle,
    loading,
    name,
    disabled = false,
    type = ButtonEnums.PRIMARY,
    renderIcon,
    errorVisibility,
    iconPlacement = 'RIGHT',
    onPress,
    iconOnly = false,
  } = props;

  const styleButtonWithIcon: StyleProp<any> = {
    flexDirection: iconPlacement === 'RIGHT' ? 'row-reverse' : 'row',
    alignItems: 'center',
  };

  const styleButtonWithError: StyleProp<any> = {
    borderColor: errorVisibility ? colors.error : colors.grey,
  };

  const styleButtonWhenDisabled: StyleProp<any> = {
    backgroundColor: disabled ? colors.disabled : colors.primary,
  };

  const styleButtonLabelWhenDisabled: StyleProp<any> = {
    color: disabled ? colors.white : colors.text,
  };

  const styleButtonLabelWhenIconIsPresent: StyleProp<any> = {
    marginLeft: renderIcon ? 15 : 2,
  };

  const calculateButtonWithBasedOnType = (): StyleProp<any> => {
    if (type === ButtonEnums.SMALL) {
      return {width: Dimensions.get('window').width / 3};
    }
    if (type === ButtonEnums.STEPPER) {
      return {width: Dimensions.get('window').width / 4};
    }
    if (type === ButtonEnums.MODAL) {
      return {width: Dimensions.get('window').width / 1.75};
    }
    if (type === ButtonEnums.PRIMARY) {
      return {width: Dimensions.get('window').width / 1.15};
    }
    if (type === ButtonEnums.ICON) {
      return {width: Dimensions.get('window').width / 6};
    }
    if (type === ButtonEnums.CUSTOM) {
      return {width: Dimensions.get('window').width / 2.25};
    }
  };

  useEffect(() => {
    if (iconOnly && !renderIcon) {
      console.warn(
        `Button Component Warning: Please render a icon, renderIcon prop is must when iconOnly prop is ${iconOnly}`,
      );
    }
  }, [iconOnly, renderIcon]);

  // => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.containerStyle,
        styleButtonWhenDisabled,
        styleButtonWithError,
        calculateButtonWithBasedOnType(),
        containerStyle,
      ]}
      onPress={onPress}>
      <View style={[styles.contentStyle, styleButtonWithIcon, contentStyle]}>
        {renderIcon ? renderIcon() : null}
        {loading ? (
          <ActivityIndicator size={Generic.SMALL} color={colors.grey} />
        ) : iconOnly ? null : (
          <AppText
            numberOfLines={1}
            textStyle={[
              styles.labelStyle,
              styleButtonLabelWhenIconIsPresent,
              styleButtonLabelWhenDisabled,
              labelStyle,
            ]}>
            {name}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
