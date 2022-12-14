import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import baseStyles from "../../Styles/BaseStyles";

const styles = StyleSheet.create({
  ...baseStyles,
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    fontSize: 16,
    color: colors.text,
    width: "95%",
  },
  cursor: {
    color: colors.grey,
  },
});

export default styles;
