import React, { useEffect, useState } from "react";

import { StyleProp, Pressable, View } from "react-native";

import moment from "moment";
import DatePickerRN, { DatePickerProps } from "react-native-date-picker";

import { colors } from "../../assets/colors";
import styles from "./DatePickerStyles";

import AppText from "../Text/AppText";

import { BaseProps } from "../../Utils/BaseProps";
import { DatePickerEnums } from "./DatePickerEnums";
import { errorStyle } from "../../Styles/BaseStyles";

export interface DTProps extends DatePickerProps, BaseProps {
  datePickerStyle?: StyleProp<any>;
  mode?: "date" | "time" | "datetime";
  date: Date;
  onDateChange?: (date: Date) => void | undefined;
  dateFormat?: string;
  testID?: string;
  placeholderStyle?: StyleProp<any>;
}

const DatePicker = (props: DTProps) => {
  const {
    containerStyle,
    labelStyle,
    datePickerStyle,
    mode = DatePickerEnums.DATE,
    disabled = false,
    date,
    maximumDate = new Date(),
    label,
    hideLabel = false,
    contentStyle,
    dateFormat = "MM-DD-YYYY",
    modal = true,
    errorMessage,
    errorVisibility,
    showErrorMessage = true,
    assistiveText,
    assistiveTextStyle,
    onDateChange,
    testID,
    placeholder = "MM-DD-YYYY",
    placeholderColor = colors.grey,
    placeholderStyle,
  } = props;

  //   Date Picker State
  const [show, setShow] = useState(false);
  const [dateInPicker, setDateInPicker] = useState<Date>(date);
  const [defaultDate, setDefaultDate] = useState<Date>(new Date());

  useEffect(() => {
    if (date) {
      setDateInPicker(date);
    }
  }, [date]);

  return (
    <Pressable
      onPress={() => setShow(!show)}
      style={[
        styles.containerStyle,
        errorStyle(errorVisibility, errorMessage),
        containerStyle,
      ]}
      disabled={disabled}
    >
      <View style={[styles.contentStyle, contentStyle]}>
        {hideLabel ? null : (
          <AppText textStyle={[styles.labelStyle, labelStyle]}>{label}</AppText>
        )}
        <AppText textStyle={[styles.dateTextStyle, labelStyle]}>
          {dateInPicker ? (
            moment(dateInPicker).format(dateFormat)
          ) : (
            <AppText
              textStyle={[
                styles.placeholderStyle,
                placeholderStyle,
                {
                  color: placeholderColor,
                },
              ]}
            >
              {placeholder}
            </AppText>
          )}
        </AppText>
      </View>
      <DatePickerRN
        testID={testID}
        textColor={!modal ? colors.emphasis : null}
        style={[styles.datePickerStyle, datePickerStyle]}
        modal={modal}
        open={show}
        date={defaultDate}
        maximumDate={maximumDate}
        mode={mode}
        onDateChange={(changedDate) => {
          if (modal) {
            return;
          }
          if (onDateChange) {
            onDateChange(changedDate);
          }
        }}
        onConfirm={(changedDate) => {
          setShow(false);
          setDateInPicker(changedDate);
          if (onDateChange) {
            onDateChange(changedDate);
          }
          setDefaultDate(changedDate);
        }}
        onCancel={() => {
          setShow(false);
        }}
      />
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
    </Pressable>
  );
};

export default DatePicker;
