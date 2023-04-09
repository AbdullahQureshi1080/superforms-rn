import React, { useState } from "react";

import { StyleProp, Text, View } from "react-native";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

import { errorStyle } from "../../Styles/BaseStyles";
import { BaseProps } from "../../Utils/BaseProps";
import styles from "./DropdownStyles";

export interface DropDownProps extends BaseProps {
  items: ItemType<any>[];
  placeholderStyles?: StyleProp<any>;
  onChange?: (e: ItemType<any>) => void;
  dropDownContainerStyle?: StyleProp<any>;
  listItemContainerStyle?: StyleProp<any>;
  dropDownPickerProps?: any;
  style?: StyleProp<any>;
  onSelect?: (e: object) => void;
}

const DropdownPicker = (props: DropDownProps) => {
  const {
    style,
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
    placeholder,
    placeholderStyles,
    onChange,
    listItemContainerStyle,
    dropDownContainerStyle,
    onSelect,
    items,
    dropDownPickerProps,
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<null | any>(null);
  const [dItems, setItems] = useState(items);
  return (
    <View
      style={[
        styles.containerStyle,
        containerStyle,
        errorStyle(errorVisibility, errorMessage),
      ]}
    >
      {hideLabel || !label ? null : (
        // eslint-disable-next-line react-native/no-inline-styles
        <Text style={[styles.labelStyle, labelStyle, { paddingLeft: 10 }]}>
          {label}
        </Text>
      )}
      <DropDownPicker
        {...dropDownPickerProps}
        flatListProps={{
          keyExtractor({}, index) {
            return index.toString();
          },
        }}
        disabled={disabled}
        itemKey={value}
        containerStyle={[styles.pickerContainerStyle]}
        listItemContainerStyle={[
          styles.listItemContainerStyle,
          listItemContainerStyle,
        ]}
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        style={[styles.style, style]}
        open={open}
        value={value}
        items={dItems}
        setOpen={setOpen}
        setItems={setItems}
        setValue={setValue}
        labelStyle={[styles.textStyles, labelStyle]}
        textStyle={[styles.textStyles, assistiveTextStyle]}
        onSelectItem={(item: any) => {
          if (onChange) {
            onChange(item.value);
          }
          if (onSelect) {
            onSelect(item);
          }
        }}
        listMode="SCROLLVIEW"
        dropDownContainerStyle={[
          styles.dropDownContainerStyle,
          dropDownContainerStyle,
        ]}
        placeholder={placeholder}
        placeholderStyle={placeholderStyles}
      />

      {assistiveText && !errorVisibility ? (
        <Text
          style={[
            styles.assistiveTextStyle,
            assistiveTextStyle,
            { paddingHorizontal: 10 },
          ]}
        >
          {assistiveText}
        </Text>
      ) : null}
      {errorVisibility && showErrorMessage && errorMessage ? (
        <Text
          style={[
            styles.errorText,
            assistiveTextStyle,
            { paddingHorizontal: 10 },
          ]}
        >
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default DropdownPicker;
