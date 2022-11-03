import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import baseStyles from "../../Styles/BaseStyles";

const styles = StyleSheet.create({
  ...baseStyles,
  dateTextStyle: {
    fontSize: 16,
    color: colors.text,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  datePickerStyle: { backgroundColor: colors.primary },
  placeholderStyle: {
    color: colors.grey,
    fontSize: 16,
  },
});

export default styles;
